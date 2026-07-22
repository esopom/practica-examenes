# Práctica de Exámenes

Web para practicar exámenes tipo test (Salesforce ADM 201). **Sitio estático**:
no hay servidor ni base de datos, así que se publica gratis en GitHub Pages y
funciona incluso sin conexión una vez cargada.

Actualmente incluye **11 exámenes con 681 preguntas**.

## Cómo funciona

- Las preguntas están incrustadas en `js/data/exams.js` (archivo generado).
- Tu progreso se guarda en el **`localStorage` de tu navegador**: no se sube a
  ningún sitio, pero tampoco se sincroniza entre dispositivos. Si borras los
  datos del navegador, pierdes el progreso.

### Modos

1. **Practicar** — elige examen y modo:
   - *Práctica libre*: feedback inmediato tras cada respuesta.
   - *Simulacro cronometrado*: sin feedback hasta el final, con tiempo límite.
   - Las preguntas de selección múltiple se corrigen por conjunto: hay que
     marcar todas las correctas y ninguna incorrecta.
2. **Repasar falladas** — repetición espaciada (Leitner de 6 cajas). Solo
   aparecen las preguntas que ya tocan repasar.
3. **Estadísticas** — precisión global, por examen y ranking de más falladas.

## Ver la web en local

```bash
npm start          # http://localhost:3000
```

Es un servidor estático mínimo, solo para previsualizar. No hace falta para
publicar.

## Añadir o regenerar exámenes desde PDFs

El pipeline tiene dos pasos: PDF → JSON revisable → archivo de datos de la web.

```bash
npm install                                  # solo la primera vez (pdfjs-dist)
node scripts/import-pdfs.js "C:/ruta/a/tus/pdfs"
node scripts/build-exams.js
```

1. **`scripts/import-pdfs.js`** lee todos los PDFs de la carpeta y escribe un
   JSON por examen en `data/exams/`. Imprime un informe de validación y
   **descarta** las preguntas dudosas (sin respuesta en la clave, respuesta
   fuera de rango, opciones vacías...), listándolas para que las revises.
2. **`scripts/build-exams.js`** junta esos JSON y genera `js/data/exams.js`.

Los PDFs de origen no comparten formato, así que el parser
(`scripts/lib/parse-exam.js`) autodetecta las variantes: numeración `1.` / `1.-`
/ `1)`, opciones `A.` / `A-` / `A.-` / `a.` (incluso sin espacio o a mitad de
línea), y claves de respuestas al final del documento en formatos como
`1- AD`, `8. D`, `1.b`, `1 – A, D`, `54.- d`, `3   D`, a dos columnas o con una
URL detrás.

### Corregir una pregunta a mano

Edita el JSON correspondiente en `data/exams/` y vuelve a ejecutar
`node scripts/build-exams.js`. Formato:

```json
{
  "id": 1,
  "name": "ADM201 Examen 1",
  "questions": [
    { "question_text": "...", "options": ["...", "..."], "correct_indices": [1, 3] }
  ]
}
```

`correct_indices` es base 0 (A=0, B=1, C=2...). Un solo valor = respuesta
única; varios = selección múltiple.

> Los ids de pregunta se calculan como `id_examen * 1000 + posición`. Si
> reordenas o insertas preguntas, los ids cambian y el progreso guardado de las
> afectadas se reinicia.

## Publicar en GitHub Pages

El sitio se sirve desde la **raíz** del repositorio (`index.html` está ahí), así
que basta con:

1. Subir el repositorio a GitHub (debe ser **público** para usar Pages gratis).
2. En GitHub: **Settings → Pages → Source: Deploy from a branch**, rama `main`,
   carpeta `/ (root)`.
3. En un par de minutos estará en `https://<tu-usuario>.github.io/<repo>/`.

No hay que compilar nada: lo que está en el repo es exactamente lo que se sirve.

## Estructura

```
index.html            página única
css/styles.css        estilos
js/
  data/exams.js       preguntas incrustadas (GENERADO)
  api.js              lógica: sesiones, corrección, Leitner, estadísticas
  practice.js         interfaz de practicar y repasar
  stats.js            interfaz de estadísticas
  app.js              navegación entre pestañas
data/exams/*.json     exámenes en JSON (fuente editable)
scripts/
  import-pdfs.js      PDF  -> data/exams/*.json
  build-exams.js      JSON -> js/data/exams.js
  serve.js            servidor estático local
  lib/                extractor de PDF y parser de exámenes
```
