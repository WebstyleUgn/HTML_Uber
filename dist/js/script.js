
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav-list'),
    menuItem = document.querySelectorAll('.header__nav-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__nav-list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav-list_active');
        })
    })
})