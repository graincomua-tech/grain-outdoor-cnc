// /js/main.js
(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");

    // Якщо на сторінці немає меню — просто нічого не робимо (щоб не ламало інші сторінки)
    if (!btn || !menu) return;

    function openMenu() {
      menu.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
      const isHidden = menu.classList.contains("hidden");
      if (isHidden) openMenu();
      else closeMenu();
    }

    // Клік по кнопці
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleMenu();
    });

    // Закривати меню після кліку по пункту меню
    menu.addEventListener("click", function (e) {
      const a = e.target.closest("a");
      if (a) closeMenu();
    });

    // Закривати при ресайзі на desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeMenu();
    });

    // Закривати по Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  });
})();
