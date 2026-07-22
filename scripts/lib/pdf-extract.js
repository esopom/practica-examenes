// Extrae texto de un PDF con pdfjs-dist, reconstruyendo las líneas originales.
// (Antes vivía en server/pdfExtract.js; se movió aquí al eliminar el backend,
// porque las herramientas de importación siguen necesitándolo.)
const path = require('path');

const pdfDistDir = path.dirname(require.resolve('pdfjs-dist/package.json'));
const toUrlDir = (...segments) => path.join(pdfDistDir, ...segments).replace(/\\/g, '/') + '/';
const cMapUrl = toUrlDir('cmaps');
const standardFontDataUrl = toUrlDir('standard_fonts');

let pdfjsLibPromise = null;
function loadPdfjs() {
  if (!pdfjsLibPromise) pdfjsLibPromise = import('pdfjs-dist/legacy/build/pdf.mjs');
  return pdfjsLibPromise;
}

// Reconstruye el texto pagina por pagina agrupando los items por su coordenada
// Y, para que cada linea del PDF original quede en su propia linea de texto
// (el parser de preguntas depende de esto).
function itemsToText(items) {
  let text = '';
  let lastY = null;
  for (const item of items) {
    if ('str' in item === false) continue;
    if (lastY !== null && item.transform[5] !== lastY) {
      text += '\n';
    } else if (text) {
      text += ' ';
    }
    text += item.str;
    lastY = item.transform[5];
  }
  return text;
}

async function extractTextFromPdf(buffer) {
  const pdfjsLib = await loadPdfjs();
  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(buffer),
    cMapUrl,
    cMapPacked: true,
    standardFontDataUrl,
  });

  try {
    const doc = await loadingTask.promise;
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      fullText += itemsToText(content.items) + '\n';
    }
    return fullText;
  } finally {
    await loadingTask.destroy();
  }
}

module.exports = { extractTextFromPdf };
