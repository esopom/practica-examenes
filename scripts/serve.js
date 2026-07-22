// Servidor estático mínimo para previsualizar la web en local antes de
// publicarla. Sin dependencias: solo módulos de Node.
//
// Uso:  npm start        (http://localhost:3000)
//
// Ojo: esto es SOLO para desarrollo. En GitHub Pages no hace falta nada de
// esto, allí los archivos se sirven directamente.

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const relative = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const filePath = path.join(ROOT, relative);

  // No servir nada fuera de la carpeta del proyecto.
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end('Prohibido');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('No encontrado: ' + relative);
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Práctica de exámenes: http://localhost:${PORT}`);
});
