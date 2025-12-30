// /js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  if (!btn || !menu) return;

  const openMenu = () => {
    menu.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isHidden = menu.classList.contains("hidden");
    isHidden ? openMenu() : closeMenu();
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // Закривати при кліку на посилання всередині меню
  menu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeMenu();
  });

  // Закривати при кліку поза меню (якщо відкрите)
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("hidden")) return;
    if (e.target === btn || btn.contains(e.target)) return;
    if (menu.contains(e.target)) return;
    closeMenu();
  });

  // Закривати по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
