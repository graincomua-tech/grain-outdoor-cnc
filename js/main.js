document.addEventListener("DOMContentLoaded", () => {
  const heroEls = document.querySelectorAll(
    ".hero-title, .hero-subtitle, .hero-buttons"
  );
  heroEls.forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 150 + i * 120);
  });
});
