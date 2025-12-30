// ===== Mobile menu toggle =====
(function () {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  const closeMenu = () => {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isHidden = menu.classList.contains("hidden");
    if (isHidden) {
      menu.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
    } else {
      closeMenu();
    }
  };

  btn.addEventListener("click", toggleMenu);

  // close on link click
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // close on outside click
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!menu.contains(target) && !btn.contains(target)) closeMenu();
  });

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
