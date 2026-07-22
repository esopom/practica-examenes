(function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const views = document.querySelectorAll('.view');

  function showView(name) {
    views.forEach((v) => v.classList.toggle('hidden', v.id !== `view-${name}`));
    tabButtons.forEach((b) => b.classList.toggle('active', b.dataset.view === name));

    if (name === 'stats') Stats.render();
    if (name === 'practice' || name === 'review') Practice.refreshExamLists();
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });

  Practice.init();
  Practice.refreshExamLists();

  showView('practice');
})();
