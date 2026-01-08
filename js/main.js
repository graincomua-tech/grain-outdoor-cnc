document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');

  if (!btn || !menu) return;

  // не навішувати події двічі
  if (btn.dataset.bound === '1') return;
  btn.dataset.bound = '1';

  const openMenu = () => {
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) closeMenu();
    else openMenu();
  });

  // закривати після кліку по пункту
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  // якщо перейшли на desktop — моб. меню ховаємо
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMenu();
  });
});
