// /js/main.js
(function () {
  function initMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    // щоб не прив'язувалось двічі (якщо скрипт випадково підключили повторно)
    if (btn.dataset.bound === "1") return;
    btn.dataset.bound = "1";

    function openMenu() {
      menu.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const isHidden = menu.classList.contains("hidden");
      if (isHidden) openMenu();
      else closeMenu();
    });

    // клік по пункту меню — закриває меню
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });

    // клік поза меню — закриває меню
    document.addEventListener("click", function (e) {
      const clickInside = menu.contains(e.target) || btn.contains(e.target);
      if (!clickInside) closeMenu();
    });

    // при переході на десктоп — меню закривається
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeMenu();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
