// TOGGLE NAV MOBILE

const toggleClose = document.querySelector('.Menu_burger');
const toggleOpen = document.querySelector('#logoToggleX');
const navToggle = document.querySelector('#nav-toggle-mobile');

toggleClose.addEventListener('click', () => {
    navToggle.style.left = "0";
})
toggleOpen.addEventListener('click', () => {
    navToggle.style.left = "-150%";
})
