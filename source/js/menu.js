const menuBtn = document.querySelector('.btn-hid');
const mobileMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close__menu');
const backgroundMenu = document.querySelector('.menu__modal');


menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('menu__open');
    backgroundMenu.classList.add('menu__modal-open');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('menu__open');
    backgroundMenu.classList.remove('menu__modal-close');
});
