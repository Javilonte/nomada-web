/* =========================================================
   Lang Switch — Persistencia simple
   Nota: la navegación entre idiomas se hace por URL (/es/ y /en/)
   Este script solo resalta el idioma activo en cada página.
   ========================================================= */
(function () {
  const html = document.documentElement;
  const switchers = document.querySelectorAll('.lang-switch');
  if (!switchers.length) return;

  const setActive = () => {
    const current = html.lang || 'es';
    switchers.forEach((sw) => {
      sw.querySelectorAll('a').forEach((a) => {
        if (a.dataset.lang === current) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      });
    });
  };

  setActive();
})();
