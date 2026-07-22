const Practice = (() => {
  let exams = [];

  async function refreshExamLists() {
    exams = await Api.listExams();

    const practiceSelect = document.getElementById('practice-exam-select');
    const reviewSelect = document.getElementById('review-exam-select');

    const prevPractice = practiceSelect.value;
    const prevReview = reviewSelect.value;

    const optionsHtml =
      '<option value="" disabled selected hidden>Elige un examen…</option>' +
      exams.map((e) => `<option value="${e.id}">${escapeHtml(e.name)} (${e.question_count})</option>`).join('');

    practiceSelect.innerHTML = optionsHtml;
    reviewSelect.innerHTML = optionsHtml;

    if (exams.some((e) => String(e.id) === prevPractice)) practiceSelect.value = prevPractice;
    if (exams.some((e) => String(e.id) === prevReview)) reviewSelect.value = prevReview;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function init() {
    document.getElementById('practice-mode-select').addEventListener('change', (e) => {
      document.getElementById('time-limit-field').classList.toggle('hidden', e.target.value !== 'timed');
    });

    document.getElementById('start-practice-btn').addEventListener('click', startPractice);
    document.getElementById('start-review-btn').addEventListener('click', startReview);
  }

  async function startPractice() {
    const examId = document.getElementById('practice-exam-select').value;
    if (!examId) {
      alert('Elige un examen antes de empezar.');
      return;
    }
    const mode = document.getElementById('practice-mode-select').value;
    const numQuestions = document.getElementById('practice-num-questions').value;
    const timeLimitMin = document.getElementById('practice-time-limit').value;

    await beginSession({
      exam_id: examId,
      mode,
      num_questions: numQuestions,
      time_limit_seconds: mode === 'timed' ? Number(timeLimitMin) * 60 : undefined,
      runnerEl: document.getElementById('practice-runner'),
      resultsEl: document.getElementById('practice-results'),
      setupEl: document.getElementById('practice-setup'),
    });
  }

  async function startReview() {
    const examId = document.getElementById('review-exam-select').value;
    if (!examId) {
      alert('Elige un examen antes de empezar.');
      return;
    }
    const numQuestions = document.getElementById('review-num-questions').value;

    await beginSession({
      exam_id: examId,
      mode: 'review',
      num_questions: numQuestions,
      runnerEl: document.getElementById('review-runner'),
      resultsEl: document.getElementById('review-results'),
      setupEl: document.getElementById('review-setup'),
    });
  }

  async function beginSession({ exam_id, mode, num_questions, time_limit_seconds, runnerEl, resultsEl, setupEl }) {
    try {
      const session = await Api.startSession({ exam_id, mode, num_questions, time_limit_seconds });
      setupEl.classList.add('hidden');
      resultsEl.classList.add('hidden');
      runnerEl.classList.remove('hidden');
      runQuestions({
        sessionId: session.session_id,
        mode: session.mode,
        questions: session.questions,
        timeLimitSeconds: session.time_limit_seconds,
        runnerEl,
        resultsEl,
        setupEl,
      });
    } catch (err) {
      alert(err.message);
    }
  }

  function runQuestions({ sessionId, mode, questions, timeLimitSeconds, runnerEl, resultsEl, setupEl }) {
    let idx = 0;
    let timerInterval = null;
    let remainingSeconds = timeLimitSeconds || 0;
    let finished = false;

    // Estado por pregunta: permite ir adelante/atrás sin perder la selección
    // ni el resultado de las ya confirmadas.
    const state = questions.map(() => ({ selected: new Set(), confirmed: false, result: null }));

    function clearTimer() {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null;
    }

    async function finish() {
      if (finished) return;
      finished = true;
      clearTimer();
      const summary = await Api.finishSession(sessionId);
      runnerEl.classList.add('hidden');
      renderResults(summary, resultsEl, setupEl);
    }

    function maybeFinish() {
      const pending = state.filter((s) => !s.confirmed).length;
      if (pending > 0) {
        const msg =
          pending === 1
            ? 'Hay 1 pregunta sin responder. ¿Quieres terminar igualmente?'
            : `Hay ${pending} preguntas sin responder. ¿Quieres terminar igualmente?`;
        if (!confirm(msg)) return;
      }
      finish();
    }

    function renderQuestion() {
      const q = questions[idx];
      const st = state[idx];
      runnerEl.innerHTML = '';

      const card = document.createElement('div');
      card.className = 'q-card';

      const progress = document.createElement('div');
      progress.className = 'q-progress';
      const progLeft = document.createElement('span');
      progLeft.textContent = `Pregunta ${idx + 1} de ${questions.length}`;
      progress.appendChild(progLeft);
      if (mode === 'timed') {
        const timerSpan = document.createElement('span');
        timerSpan.className = 'timer';
        timerSpan.id = 'timer-display';
        progress.appendChild(timerSpan);
      }
      card.appendChild(progress);

      const track = document.createElement('div');
      track.className = 'q-progress-track';
      const fill = document.createElement('div');
      fill.className = 'q-progress-fill';
      fill.style.width = `${Math.round(((idx + 1) / questions.length) * 100)}%`;
      track.appendChild(fill);
      card.appendChild(track);

      const qText = document.createElement('div');
      qText.className = 'q-text';
      qText.textContent = q.question_text;
      card.appendChild(qText);

      // Aviso de selección en preguntas de varias respuestas: dice cuántas
      // faltan (o sobran) y se actualiza a cada clic.
      let hintEl = null;
      if (q.multi_select) {
        hintEl = document.createElement('div');
        hintEl.className = 'hint q-select-hint';
        hintEl.style.marginTop = '-10px';
        hintEl.style.marginBottom = '10px';
        card.appendChild(hintEl);
      }

      // Se crea más abajo, en el pie de la tarjeta.
      let confirmBtn = null;

      // Mantiene sincronizados el aviso y el botón de confirmar. Solo se puede
      // confirmar cuando hay marcadas EXACTAMENTE las respuestas que se piden.
      function updateSelectionUi() {
        const marcadas = st.selected.size;
        const piden = q.correct_count;

        if (hintEl) {
          if (st.confirmed) {
            hintEl.textContent = `Esta pregunta pedía ${piden} respuestas.`;
            hintEl.classList.remove('incomplete');
          } else if (marcadas === piden) {
            hintEl.textContent = `Has marcado las ${piden} respuestas: ya puedes confirmar.`;
            hintEl.classList.remove('incomplete');
          } else if (marcadas < piden) {
            const faltan = piden - marcadas;
            hintEl.textContent =
              `Esta pregunta pide ${piden} respuestas. Te ${faltan === 1 ? 'falta 1' : `faltan ${faltan}`} por marcar.`;
            hintEl.classList.add('incomplete');
          } else {
            hintEl.textContent =
              `Esta pregunta pide solo ${piden} respuestas. Has marcado ${marcadas}: quita ${marcadas - piden}.`;
            hintEl.classList.add('incomplete');
          }
        }

        if (confirmBtn) {
          const incompleta = marcadas !== piden;
          confirmBtn.disabled = incompleta;
          confirmBtn.title = incompleta
            ? `Marca exactamente ${piden} ${piden === 1 ? 'respuesta' : 'respuestas'} para poder confirmar.`
            : '';
        }
      }

      const optsWrap = document.createElement('div');
      optsWrap.className = 'q-options';

      q.options.forEach((opt, oIdx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'q-option-btn';
        btn.textContent = opt;

        if (st.selected.has(oIdx)) btn.classList.add('selected');

        if (st.confirmed) {
          btn.disabled = true;
          if (mode !== 'timed' && st.result) {
            if (st.result.correct_indices.includes(oIdx)) {
              btn.classList.add('correct');
            } else if (st.selected.has(oIdx)) {
              btn.classList.add('incorrect');
            }
          }
        } else {
          btn.addEventListener('click', () => {
            if (q.multi_select) {
              if (st.selected.has(oIdx)) {
                st.selected.delete(oIdx);
                btn.classList.remove('selected');
              } else {
                st.selected.add(oIdx);
                btn.classList.add('selected');
              }
            } else {
              st.selected.clear();
              st.selected.add(oIdx);
              optsWrap.querySelectorAll('.q-option-btn').forEach((b) => b.classList.remove('selected'));
              btn.classList.add('selected');
            }
            updateSelectionUi();
          });
        }

        optsWrap.appendChild(btn);
      });
      card.appendChild(optsWrap);

      if (st.confirmed && mode !== 'timed' && st.result && st.result.explanation) {
        const expl = document.createElement('div');
        expl.className = 'q-explanation';
        expl.textContent = st.result.explanation;
        card.appendChild(expl);
      }

      const footer = document.createElement('div');
      footer.className = 'q-footer';

      const exitBtn = document.createElement('button');
      exitBtn.className = 'secondary-btn';
      exitBtn.textContent = 'Terminar ahora';
      exitBtn.addEventListener('click', maybeFinish);
      footer.appendChild(exitBtn);

      const navWrap = document.createElement('div');
      navWrap.className = 'q-nav';

      const prevBtn = document.createElement('button');
      prevBtn.className = 'secondary-btn';
      prevBtn.textContent = 'Anterior';
      prevBtn.disabled = idx === 0;
      prevBtn.addEventListener('click', () => {
        if (idx === 0) return;
        idx -= 1;
        renderQuestion();
      });
      navWrap.appendChild(prevBtn);

      if (!st.confirmed) {
        confirmBtn = document.createElement('button');
        confirmBtn.className = 'primary-btn';
        confirmBtn.textContent = 'Confirmar respuesta';
        confirmBtn.addEventListener('click', () => {
          // Red de seguridad: nunca se confirma una respuesta incompleta.
          if (st.selected.size !== q.correct_count) {
            updateSelectionUi();
            return;
          }
          confirmBtn.disabled = true;
          confirmAnswer(confirmBtn);
        });
        navWrap.appendChild(confirmBtn);
      }

      const nextBtn = document.createElement('button');
      nextBtn.className = st.confirmed ? 'primary-btn' : 'secondary-btn';
      nextBtn.textContent = idx + 1 < questions.length ? 'Siguiente' : 'Ver resultados';
      nextBtn.addEventListener('click', () => {
        // Si dejó una selección a medias sin confirmar, avisamos: de lo
        // contrario la pregunta se quedaría sin responder sin que se entere.
        if (!st.confirmed && st.selected.size > 0 && st.selected.size !== q.correct_count) {
          const msg =
            `Has marcado ${st.selected.size} de las ${q.correct_count} respuestas que pide esta pregunta ` +
            `y no la has confirmado.\n\nSi continúas, quedará SIN RESPONDER. ¿Seguro que quieres continuar?`;
          if (!confirm(msg)) return;
        }
        if (idx + 1 < questions.length) {
          idx += 1;
          renderQuestion();
        } else {
          maybeFinish();
        }
      });
      navWrap.appendChild(nextBtn);

      footer.appendChild(navWrap);
      card.appendChild(footer);

      runnerEl.appendChild(card);

      // Deja el aviso y el botón de confirmar en su estado inicial correcto.
      updateSelectionUi();

      if (mode === 'timed') updateTimerDisplay();
    }

    async function confirmAnswer(confirmBtn) {
      const q = questions[idx];
      const st = state[idx];
      const selectedIndices = [...st.selected];

      let result;
      try {
        result = await Api.answer(sessionId, { question_id: q.id, selected_indices: selectedIndices });
      } catch (err) {
        alert(err.message);
        confirmBtn.disabled = false;
        return;
      }

      st.confirmed = true;
      st.result = result;
      renderQuestion();
    }

    function updateTimerDisplay() {
      const el = document.getElementById('timer-display');
      if (!el) return;
      const m = Math.floor(remainingSeconds / 60)
        .toString()
        .padStart(2, '0');
      const s = (remainingSeconds % 60).toString().padStart(2, '0');
      el.textContent = `${m}:${s}`;
      el.classList.toggle('low', remainingSeconds <= 30);
    }

    if (mode === 'timed' && timeLimitSeconds) {
      timerInterval = setInterval(() => {
        remainingSeconds -= 1;
        updateTimerDisplay();
        if (remainingSeconds <= 0) finish();
      }, 1000);
    }

    renderQuestion();
  }

  function renderResults(summary, resultsEl, setupEl) {
    resultsEl.classList.remove('hidden');
    resultsEl.innerHTML = '';

    const pct = summary.answered > 0 ? Math.round((summary.correct_count / summary.answered) * 100) : 0;

    const summaryCard = document.createElement('div');
    summaryCard.className = 'results-summary';
    summaryCard.innerHTML = `
      <div>Resultado</div>
      <div class="results-score">${summary.correct_count} / ${summary.answered}</div>
      <div>${pct}% de aciertos</div>
      <button class="secondary-btn" id="back-to-setup-btn" style="margin-top:14px;">Volver</button>
    `;
    resultsEl.appendChild(summaryCard);

    const list = document.createElement('div');
    list.className = 'results-list';
    summary.review.forEach((r, i) => {
      const item = document.createElement('div');
      item.className = 'result-item ' + (r.is_correct ? 'correct' : 'incorrect');
      const selectedText = r.selected_indices.length
        ? r.selected_indices.map((idx) => r.options[idx]).join(', ')
        : '(sin responder)';
      const correctText = r.correct_indices.map((idx) => r.options[idx]).join(', ');
      item.innerHTML = `
        <div><strong>${i + 1}.</strong> ${escapeHtml(r.question_text)}</div>
        <div class="result-opt ${r.is_correct ? 'correct-answer' : 'wrong-answer'}">Tu respuesta: ${escapeHtml(selectedText)}</div>
        ${!r.is_correct ? `<div class="result-opt correct-answer">Correcta: ${escapeHtml(correctText)}</div>` : ''}
        ${r.explanation ? `<div class="q-explanation">${escapeHtml(r.explanation)}</div>` : ''}
      `;
      list.appendChild(item);
    });
    resultsEl.appendChild(list);

    document.getElementById('back-to-setup-btn').addEventListener('click', () => {
      resultsEl.classList.add('hidden');
      setupEl.classList.remove('hidden');
    });
  }

  return { init, refreshExamLists };
})();
