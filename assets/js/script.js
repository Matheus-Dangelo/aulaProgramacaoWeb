// Botão hamburguer
const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Submenu no mobile (abre/fecha ao tocar)
document.querySelectorAll('.has-submenu > a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            link.parentElement.classList.toggle('open');
        }
    });
});