(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const reveal = () => {
    const elements = document.querySelectorAll('[data-korve-reveal]:not([data-korve-ready])');
    if (!elements.length) return;

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.dataset.korveReady = 'true';
        element.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    elements.forEach((element) => {
      element.dataset.korveReady = 'true';
      observer.observe(element);
    });
  };

  document.addEventListener('DOMContentLoaded', reveal);
  document.addEventListener('shopify:section:load', reveal);
})();
