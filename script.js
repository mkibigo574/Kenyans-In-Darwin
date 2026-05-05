const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

document.querySelector('.join-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('This demo form is ready to be connected to your real registration system.');
});
