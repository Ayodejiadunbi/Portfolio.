const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuIcon.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuIcon.setAttribute('aria-expanded', 'false');
    });
  });
}
