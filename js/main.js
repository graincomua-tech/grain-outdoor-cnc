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

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.contains("hidden") ? openMenu() : closeMenu();
  });

  // Закрити після натиску на пункт меню
  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // Закрити по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
