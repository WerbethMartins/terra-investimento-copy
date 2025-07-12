const toggler = document.getElementById('navbar-toggler');

const menu = document.querySelector('.navbar-menu');

toggler.addEventListener('click', () => {
    menu.classList.toggle('active');
});