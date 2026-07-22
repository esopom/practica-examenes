// Genera js/data/exams.js a partir de los JSON de data/exams/.
//
// Uso:  node scripts/build-exams.js
//
// js/data/exams.js es el único origen de datos de la web estática: define la
// constante global EXAMS_DATA que consume js/api.js. No hay servidor ni base
// de datos, así que este fichero se versiona en el repo.

const fs = require('fs');
const path = require('path');

const IN_DIR = path.join(__dirname, '..', 'data', 'exams');
const OUT_FILE = path.join(__dirname, '..', 'js', 'data', 'exams.js');

const files = fs
  .readdirSync(IN_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => ({ file: f, data: JSON.parse(fs.readFileSync(path.join(IN_DIR, f), 'utf8')) }))
  .sort((a, b) => (a.data.id || 0) - (b.data.id || 0));

if (!files.length) {
  console.error(`No hay JSON en ${IN_DIR}. Ejecuta antes: node scripts/import-pdfs.js "<carpeta>"`);
  process.exit(1);
}

const exams = [];
const seenIds = new Set();

for (const { file, data } of files) {
  if (!data.id || !data.name || !Array.isArray(data.questions)) {
    console.error(`  AVISO: ${file} no tiene id/name/questions. Se omite.`);
    continue;
  }
  if (seenIds.has(data.id)) {
    console.error(`  AVISO: id ${data.id} duplicado en ${file}. Se omite.`);
    continue;
  }
  seenIds.add(data.id);

  // Los ids de pregunta deben ser estables: el progreso del usuario se guarda
  // en localStorage con esta clave. Fórmula: id_examen * 1000 + posición.
  const questions = data.questions.map((q, i) => ({
    id: data.id * 1000 + (i + 1),
    question_text: q.question_text,
    options: q.options,
    correct_indices: q.correct_indices,
    ...(q.explanation ? { explanation: q.explanation } : {}),
  }));

  exams.push({ id: data.id, name: data.name, questions });
}

const header = `// ARCHIVO GENERADO — no lo edites a mano.
// Se genera con:  node scripts/build-exams.js
// (a partir de los JSON de data/exams/, que salen de scripts/import-pdfs.js)
//
// Exámenes incrustados para poder publicar la web como sitio estático, sin
// servidor ni base de datos. correct_indices usa índices base 0 sobre options
// (A=0, B=1, ...); más de un índice = pregunta de selección múltiple.

`;

const body = 'const EXAMS_DATA = ' + JSON.stringify(exams, null, 2) + ';\n';

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, header + body, 'utf8');

const totalQ = exams.reduce((a, e) => a + e.questions.length, 0);
console.log(`Generado ${path.relative(process.cwd(), OUT_FILE)}`);
console.log(`  ${exams.length} exámenes, ${totalQ} preguntas en total:`);
for (const e of exams) console.log(`    [${e.id}] ${e.name} — ${e.questions.length}`);
