/* =========================================================
   FAQ — Acordeón accesible
   ========================================================= */
(function () {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });

    btn.setAttribute('aria-expanded', 'false');
  });
})();
