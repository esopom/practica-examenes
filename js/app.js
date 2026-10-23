(function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const certButtons = document.querySelectorAll('.cert-btn');
  const views = document.querySelectorAll('.view');

  // Apartado activo (Administrador / Developer). Se recuerda entre visitas;
  // si el navegador no deja usar localStorage, simplemente empieza en admin.
  const CERT_KEY = 'practica-examenes.certification';
  let certification = 'admin';
  try {
    if (localStorage.getItem(CERT_KEY) === 'developer') certification = 'developer';
  } catch (e) {}

  let currentView = 'practice';

  function showView(name) {
    currentView = name;
    views.forEach((v) => v.classList.toggle('hidden', v.id !== `view-${name}`));
    tabButtons.forEach((b) => b.classList.toggle('active', b.dataset.view === name));

    if (name === 'stats') Stats.render(certification);
    if (name === 'practice' || name === 'review') Practice.refreshExamLists(certification);
  }

  function setCertification(cert) {
    if (cert === certification) return;
    // Cambiar de apartado a mitad de examen lo cancela: avisamos antes.
    if (Practice.hasRunningSession() && !confirm('Tienes un examen en curso. Si cambias de apartado se cancelará. ¿Continuar?')) {
      return;
    }
    certification = cert;
    try {
      localStorage.setItem(CERT_KEY, cert);
    } catch (e) {}
    Practice.reset();
    updateCertButtons();
    showView(currentView);
  }

  function updateCertButtons() {
    certButtons.forEach((b) => {
      const active = b.dataset.cert === certification;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });
  certButtons.forEach((btn) => {
    btn.addEventListener('click', () => setCertification(btn.dataset.cert));
  });

  Practice.init();
  updateCertButtons();
  showView('practice');
})();
