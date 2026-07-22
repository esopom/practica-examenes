const Stats = (() => {
  async function render() {
    const container = document.getElementById('stats-content');
    container.innerHTML = 'Cargando...';

    let data;
    try {
      data = await Api.getStats();
    } catch (err) {
      container.textContent = err.message;
      return;
    }

    container.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'stats-grid';
    grid.innerHTML = `
      <div class="stat-tile"><div class="value">${data.total_attempts}</div><div class="label">Preguntas respondidas</div></div>
      <div class="stat-tile"><div class="value">${data.accuracy != null ? data.accuracy + '%' : '—'}</div><div class="label">Precisión general</div></div>
      <div class="stat-tile"><div class="value">${data.due_for_review}</div><div class="label">Listas para repasar</div></div>
    `;
    container.appendChild(grid);

    if (data.per_exam.length > 0) {
      const table = document.createElement('table');
      table.className = 'stats-table';
      table.innerHTML = `
        <thead>
          <tr><th>Examen</th><th>Preguntas</th><th>Intentos</th><th>Precisión</th></tr>
        </thead>
        <tbody>
          ${data.per_exam
            .map(
              (e) =>
                `<tr><td>${escapeHtml(e.name)}</td><td>${e.question_count}</td><td>${e.attempts}</td><td>${
                  e.accuracy != null ? e.accuracy + '%' : '—'
                }</td></tr>`
            )
            .join('')}
        </tbody>
      `;
      container.appendChild(table);
    }

    if (data.weakest_questions.length > 0) {
      const heading = document.createElement('h2');
      heading.textContent = 'Preguntas más falladas';
      heading.style.marginTop = '24px';
      heading.style.fontSize = '1.1rem';
      container.appendChild(heading);

      const table2 = document.createElement('table');
      table2.className = 'stats-table';
      table2.innerHTML = `
        <thead>
          <tr><th>Pregunta</th><th>Examen</th><th>Fallos</th><th>Vistas</th></tr>
        </thead>
        <tbody>
          ${data.weakest_questions
            .map(
              (q) =>
                `<tr><td>${escapeHtml(q.question_text.slice(0, 80))}${q.question_text.length > 80 ? '…' : ''}</td><td>${escapeHtml(
                  q.exam_name
                )}</td><td>${q.times_wrong}</td><td>${q.times_seen}</td></tr>`
            )
            .join('')}
        </tbody>
      `;
      container.appendChild(table2);
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  return { render };
})();
