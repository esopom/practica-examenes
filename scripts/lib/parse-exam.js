// Parser de exámenes tipo test extraídos de PDF.
//
// Los PDFs de origen NO comparten formato: cada uno numera y marca las cosas a
// su manera. Este parser autodetecta las variantes observadas:
//
//   Preguntas:  "1.", "1.-", "1-", "1)"
//   Opciones:   "A.", "A-", "A.-", "A)", "a.", e incluso sin espacio ("A.Texto")
//               y con el marcador a mitad de línea (PDFs a dos columnas).
//   Clave:      "1-  AD", "8.  D", "1.b", "1 – A, D", "54.- d", "3   D",
//               a dos columnas ("2- BCE   32- BC") y con URL o nota detrás.
//
// La estrategia para la clave es en dos fases: primero localizar DÓNDE empieza
// (por cabecera "Respuestas"/"Answers" o por un bloque denso de líneas del
// tipo "número + letras"), y solo entonces parsear de forma permisiva dentro
// de esa sección. Así se evita confundir enunciados con respuestas.

const LETTERS = 'ABCDEF';

// Línea que es SOLO "número + letras" (sirve para localizar el bloque).
const RE_KEY_STRICT = /^\s*\d{1,3}\s*(?:\.\-|[.\-–—)])?\s*[A-Fa-f](?:\s*,?\s*[A-Fa-f])*\s*$/;
// Búsqueda permisiva DENTRO del bloque de clave: admite varias entradas por
// línea y texto/URL detrás. Exige inicio de línea o 2+ espacios antes.
const RE_KEY_ANY =
  /(?:^\s*|\s{2,})(\d{1,3})\s*(?:\.\-|[.\-–—)])?\s*([A-Fa-f](?:\s*,?\s*[A-Fa-f])*)(?![A-Za-z])/g;
const RE_HEADER = /^\s*(respuestas|answers|soluciones|clave)\b/i;
const RE_QSTART = /^\s*(\d{1,3})\s*(?:\.\-|[.\-–—)])\s*(\S.*)?$/;
const RE_CHOOSE = /choose\s*(\d+)\s*answer|select\s*(\d+)/i;

function lettersToIndices(raw) {
  return [...new Set(raw.replace(/[\s,]/g, '').toUpperCase().split(''))]
    .map((ch) => LETTERS.indexOf(ch))
    .filter((i) => i >= 0)
    .sort((a, b) => a - b);
}

// Fase 1: ¿en qué línea empieza la clave de respuestas?
function findKeyStart(lines) {
  for (let i = lines.length - 1; i >= 0; i--) {
    if (RE_HEADER.test(lines[i])) return i + 1;
  }
  const strict = [];
  lines.forEach((ln, i) => {
    if (RE_KEY_STRICT.test(ln)) strict.push(i);
  });
  if (strict.length < 5) return null;

  // Retrocede desde el final mientras las líneas-clave sigan cerca entre sí
  // (tolera explicaciones o URLs intercaladas).
  let start = strict[strict.length - 1];
  for (let k = strict.length - 1; k > 0; k--) {
    if (strict[k] - strict[k - 1] > 12) {
      start = strict[k];
      break;
    }
    start = strict[k - 1];
  }
  return start;
}

// Fase 2: parsear la clave dentro de la sección localizada.
function parseKey(lines, startLine) {
  const map = new Map();
  for (let i = startLine; i < lines.length; i++) {
    RE_KEY_ANY.lastIndex = 0;
    let m;
    while ((m = RE_KEY_ANY.exec(lines[i])) !== null) {
      const n = Number(m[1]);
      const idx = lettersToIndices(m[2]);
      if (n >= 1 && n <= 200 && idx.length && !map.has(n)) map.set(n, idx);
    }
  }
  return map;
}

// Separa enunciado y opciones. Busca los marcadores en orden (A, B, C…), lo
// que hace muy improbable un falso positivo dentro del enunciado.
function splitOptions(blockText) {
  const marks = [];
  let searchFrom = 0;
  for (let li = 0; li < LETTERS.length; li++) {
    const re = new RegExp(`(?:^|\\n|\\s)(${LETTERS[li]})\\s*(?:\\.\\-|[.\\-–—):])\\s*`, 'gi');
    re.lastIndex = searchFrom;
    const m = re.exec(blockText);
    if (!m) break;
    marks.push({ start: m.index, textStart: m.index + m[0].length });
    searchFrom = m.index + m[0].length;
  }
  if (marks.length < 2) return { questionText: blockText, options: [] };

  const questionText = blockText.slice(0, marks[0].start);
  const options = marks.map((mk, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].start : blockText.length;
    return blockText.slice(mk.textStart, end).replace(/\s+/g, ' ').trim();
  });
  return { questionText, options };
}

function parseQuestions(lines) {
  // Solo aceptamos inicios de pregunta que formen la secuencia 1, 2, 3…
  const starts = [];
  let expected = 1;
  lines.forEach((ln, i) => {
    const m = ln.match(RE_QSTART);
    if (m && Number(m[1]) === expected) {
      starts.push({ i, n: expected, rest: m[2] || '' });
      expected += 1;
    }
  });

  return starts.map((st, s) => {
    const to = s + 1 < starts.length ? starts[s + 1].i : lines.length;
    const blockText = [st.rest, ...lines.slice(st.i + 1, to)].join('\n');
    const { questionText, options } = splitOptions(blockText);

    const chooseMatch = questionText.match(RE_CHOOSE);
    const expectCount = chooseMatch ? Number(chooseMatch[1] || chooseMatch[2]) : null;
    // Se quita el "Choose N answers": la interfaz ya muestra "Elige N opciones".
    const clean = questionText
      .replace(/choose\s*\d+\s*answers?\.?/gi, '')
      .replace(/\(?\s*select\s*\d+\s*\)?/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    return { n: st.n, question_text: clean, options, expectCount };
  });
}

// Devuelve { questions, problems } tras validar cada pregunta.
function parseExamText(text) {
  const lines = text.split('\n');
  const keyStart = findKeyStart(lines);
  const key = keyStart !== null ? parseKey(lines, keyStart) : new Map();
  const parsed = parseQuestions(keyStart !== null ? lines.slice(0, keyStart) : lines);

  const questions = [];
  const problems = [];

  for (const q of parsed) {
    const ans = key.get(q.n);
    const issues = [];
    if (!ans || !ans.length) issues.push('sin respuesta en la clave');
    if (q.options.length < 2) issues.push(`solo ${q.options.length} opciones`);
    if (ans && ans.some((i) => i >= q.options.length)) issues.push('respuesta fuera de rango');
    if (ans && q.expectCount && ans.length !== q.expectCount) {
      issues.push(`dice "Choose ${q.expectCount}" pero la clave da ${ans.length}`);
    }
    if (!q.question_text || q.question_text.length < 15) issues.push('enunciado demasiado corto');
    // Ojo: hay opciones legítimas de un solo carácter ("2", "5").
    if (q.options.some((o) => !o || !o.trim())) issues.push('alguna opción vacía');

    if (issues.length) {
      problems.push({ n: q.n, issues });
    } else {
      questions.push({
        question_text: q.question_text,
        options: q.options,
        correct_indices: ans,
      });
    }
  }

  return { questions, problems, detectedQuestions: parsed.length, keySize: key.size };
}

module.exports = { parseExamText };
