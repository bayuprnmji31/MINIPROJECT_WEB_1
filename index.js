const iconMenu = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

iconMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});