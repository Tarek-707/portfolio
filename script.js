const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('open'));
});
