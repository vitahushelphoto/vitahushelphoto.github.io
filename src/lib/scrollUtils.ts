/**
 * Utility for smooth scrolling to page sections.
 * Centralises scroll logic used across Navigation, Footer, BackToTop.
 */
export const scrollToSection = (href: string, offset = 80): void => {
  const element = document.querySelector(href) as HTMLElement | null;
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
