// Convierte una carpeta de PDFs de examen en JSON revisables (data/exams/).
//
// Uso:
//   node scripts/import-pdfs.js "C:/ruta/a/mis/pdfs"
//
// Genera un .json por PDF e imprime un informe de validación. Las preguntas
// que no superan la validación NO se incluyen: se listan para que las revises
// y, si quieres, las añadas a mano al JSON.
//
// Después de importar, ejecuta:  node scripts/build-exams.js

const fs = require('fs');
const path = require('path');
const { extractTextFromPdf } = require('./lib/pdf-extract');
const { parseExamText } = require('./lib/parse-exam');

const srcDir = process.argv[2];
if (!srcDir) {
  console.error('Uso: node scripts/import-pdfs.js "<carpeta con PDFs>"');
  process.exit(1);
}

const OUT_DIR = path.join(__dirname, '..', 'data', 'exams');

// "ADM201 Examen 3.pdf" -> { id: 3, name: 'ADM201 Examen 3' }
function examMetaFromFilename(filename) {
  const stem = filename.replace(/\.pdf$/i, '').trim();
  const match = stem.match(/(\d+)\s*$/);
  return {
    id: match ? Number(match[1]) : null,
    name: stem,
  };
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

(async () => {
  if (!fs.existsSync(srcDir)) {
    console.error(`No existe la carpeta: ${srcDir}`);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = fs
    .readdirSync(srcDir)
    .filter((f) => f.toLowerCase().endsWith('.pdf'))
    .sort();

  if (!files.length) {
    console.error(`No hay PDFs en ${srcDir}`);
    process.exit(1);
  }

  let totalOk = 0;
  let totalDetected = 0;
  const usedIds = new Set();

  for (const file of files) {
    const meta = examMetaFromFilename(file);
    const buffer = fs.readFileSync(path.join(srcDir, file));
    const text = await extractTextFromPdf(buffer);
    const { questions, problems, detectedQuestions, keySize } = parseExamText(text);

    // Si el nombre no trae número, o está repetido, asignamos el siguiente libre.
    let id = meta.id;
    while (id === null || usedIds.has(id)) id = (id || 0) + 1;
    usedIds.add(id);

    const outPath = path.join(OUT_DIR, `${slugify(meta.name)}.json`);
    fs.writeFileSync(
      outPath,
      JSON.stringify(
        { id, name: meta.name, source_filename: file, questions },
        null,
        2
      ) + '\n',
      'utf8'
    );

    totalOk += questions.length;
    totalDetected += detectedQuestions;

    console.log(`\n=== ${file} ===`);
    console.log(`  id ${id} | detectadas ${detectedQuestions} | clave ${keySize} | VÁLIDAS ${questions.length}`);
    console.log(`  -> ${path.relative(process.cwd(), outPath)}`);
    if (problems.length) {
      console.log(`  ATENCIÓN, ${problems.length} pregunta(s) descartada(s):`);
      for (const p of problems) console.log(`    #${p.n}: ${p.issues.join('; ')}`);
    }
  }

  console.log(`\n########## ${totalOk}/${totalDetected} preguntas importadas ##########`);
  console.log('Siguiente paso:  node scripts/build-exams.js');
})();
