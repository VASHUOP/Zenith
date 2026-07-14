import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Use a small timeout to ensure DOM is fully painted
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after it becomes visible so it stays visible
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      });

      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
}
