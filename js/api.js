// Api local: toda la lógica vive en el navegador, no hay servidor.
// Los exámenes están incrustados en js/data/exams.js (generado por
// scripts/build-exams.js) y el progreso (repetición espaciada tipo Leitner) se
// guarda en localStorage. Por eso la web se puede publicar como sitio estático
// en GitHub Pages sin backend ni base de datos.
const Api = (() => {
  const STATS_KEY = 'practica-examenes.question_stats.v1';

  // Sistema de repeticion espaciada tipo Leitner: 6 cajas, intervalos en dias.
  const BOX_INTERVAL_DAYS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14, 6: 30 };
  const MAX_BOX = 6;
  const DAY_MS = 24 * 60 * 60 * 1000;

  const questionsById = new Map();
  EXAMS_DATA.forEach((exam) => {
    exam.questions.forEach((q) => {
      questionsById.set(q.id, { ...q, exam_id: exam.id, exam_name: exam.name });
    });
  });

  const sessions = new Map();
  let nextSessionId = 1;

  function loadAllStats() {
    try {
      return JSON.parse(localStorage.getItem(STATS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveAllStats(stats) {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }

  // next_review_at en epoch ms; 0 = pendiente de repaso desde ya (igual que el
  // backend, que creaba las filas con next_review_at = ahora).
  function statsFor(allStats, questionId) {
    return (
      allStats[questionId] || {
        times_seen: 0,
        times_correct: 0,
        times_wrong: 0,
        box_level: 1,
        next_review_at: 0,
        last_seen_at: null,
      }
    );
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort((x, y) => x - y);
    const sortedB = [...b].sort((x, y) => x - y);
    return sortedA.every((v, i) => v === sortedB[i]);
  }

  function toPublicQuestion(q) {
    return {
      id: q.id,
      question_text: q.question_text,
      options: q.options,
      multi_select: q.correct_indices.length > 1,
      correct_count: q.correct_indices.length,
    };
  }

  function questionPool(examId) {
    const examFilter = examId && examId !== 'all' ? Number(examId) : null;
    const pool = [];
    questionsById.forEach((q) => {
      if (!examFilter || q.exam_id === examFilter) pool.push(q);
    });
    return pool;
  }

  return {
    async listExams() {
      return EXAMS_DATA.map((e) => ({
        id: e.id,
        name: e.name,
        question_count: e.questions.length,
      }));
    },

    async startSession({ exam_id, mode, num_questions, time_limit_seconds }) {
      if (!['timed', 'free', 'review'].includes(mode)) {
        throw new Error('Modo inválido');
      }

      if (!exam_id || exam_id === 'all') {
        throw new Error('Elige un examen antes de empezar.');
      }

      const pool = questionPool(exam_id);
      let selected;

      if (mode === 'review') {
        const allStats = loadAllStats();
        const now = Date.now();
        selected = pool
          .filter((q) => statsFor(allStats, q.id).next_review_at <= now)
          .sort((a, b) => statsFor(allStats, a.id).next_review_at - statsFor(allStats, b.id).next_review_at)
          .slice(0, Number(num_questions) || 20);
      } else {
        selected = shuffle(pool).slice(0, Number(num_questions) || pool.length);
      }

      if (selected.length === 0) {
        throw new Error(
          mode === 'review'
            ? 'No hay preguntas pendientes de repaso ahora mismo.'
            : 'No hay preguntas disponibles para ese examen.'
        );
      }

      const sessionId = nextSessionId++;
      sessions.set(sessionId, { id: sessionId, mode, attempts: [], total_questions: selected.length });

      return {
        session_id: sessionId,
        mode,
        time_limit_seconds: mode === 'timed' ? Number(time_limit_seconds) || null : null,
        questions: selected.map(toPublicQuestion),
      };
    },

    async answer(sessionId, { question_id, selected_indices }) {
      const session = sessions.get(Number(sessionId));
      if (!session) throw new Error('Sesión no encontrada');

      const question = questionsById.get(question_id);
      if (!question) throw new Error('Pregunta no encontrada');

      const isCorrect = sameSet(selected_indices, question.correct_indices);
      session.attempts.push({ question_id, selected_indices, is_correct: isCorrect });

      const allStats = loadAllStats();
      const stats = statsFor(allStats, question_id);
      const newBox = isCorrect ? Math.min(stats.box_level + 1, MAX_BOX) : 1;

      allStats[question_id] = {
        times_seen: stats.times_seen + 1,
        times_correct: stats.times_correct + (isCorrect ? 1 : 0),
        times_wrong: stats.times_wrong + (isCorrect ? 0 : 1),
        box_level: newBox,
        next_review_at: Date.now() + BOX_INTERVAL_DAYS[newBox] * DAY_MS,
        last_seen_at: Date.now(),
      };
      saveAllStats(allStats);

      return {
        is_correct: isCorrect,
        correct_indices: question.correct_indices,
        explanation: question.explanation || null,
      };
    },

    async finishSession(sessionId) {
      const session = sessions.get(Number(sessionId));
      if (!session) throw new Error('Sesión no encontrada');

      const correctCount = session.attempts.filter((a) => a.is_correct).length;

      return {
        session_id: session.id,
        mode: session.mode,
        total_questions: session.total_questions,
        answered: session.attempts.length,
        correct_count: correctCount,
        review: session.attempts.map((a) => {
          const q = questionsById.get(a.question_id);
          return {
            question_id: a.question_id,
            question_text: q.question_text,
            options: q.options,
            selected_indices: a.selected_indices,
            correct_indices: q.correct_indices,
            is_correct: a.is_correct,
            explanation: q.explanation || null,
          };
        }),
      };
    },

    async getStats() {
      const allStats = loadAllStats();
      const now = Date.now();

      let totalAttempts = 0;
      let totalCorrect = 0;
      let dueForReview = 0;
      const seenQuestions = [];

      questionsById.forEach((q) => {
        const s = statsFor(allStats, q.id);
        totalAttempts += s.times_seen;
        totalCorrect += s.times_correct;
        if (s.next_review_at <= now) dueForReview += 1;
        if (s.times_seen > 0) seenQuestions.push({ q, s });
      });

      const perExam = EXAMS_DATA.map((exam) => {
        let attempts = 0;
        let correct = 0;
        exam.questions.forEach((q) => {
          const s = statsFor(allStats, q.id);
          attempts += s.times_seen;
          correct += s.times_correct;
        });
        return {
          id: exam.id,
          name: exam.name,
          question_count: exam.questions.length,
          attempts,
          correct,
          accuracy: attempts > 0 ? Math.round((correct / attempts) * 100) : null,
        };
      });

      const weakest = seenQuestions
        .sort((a, b) => {
          const ratioDiff = b.s.times_wrong / b.s.times_seen - a.s.times_wrong / a.s.times_seen;
          if (ratioDiff !== 0) return ratioDiff;
          return b.s.times_wrong - a.s.times_wrong;
        })
        .slice(0, 10)
        .map(({ q, s }) => ({
          id: q.id,
          question_text: q.question_text,
          exam_name: q.exam_name,
          times_seen: s.times_seen,
          times_wrong: s.times_wrong,
        }));

      return {
        total_attempts: totalAttempts,
        total_correct: totalCorrect,
        accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null,
        due_for_review: dueForReview,
        per_exam: perExam,
        weakest_questions: weakest,
      };
    },
  };
})();
