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

// button add contact 

const btnAdd = document.querySelectorAll('.button_add');

btnAdd.forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = `&#10004`;
    });
});

// banane Like

const banane = document.querySelectorAll('.bananeToggle');
const countLike = document.querySelectorAll('.countLike');

banane.forEach(image => {
    image.addEventListener('click', () => {
        image.src = 'Images/bananeYellow.png';
        countLike[0].innerHTML = (countLike[0].innerHTML *1) + 1;
    });
});





// console.log((countLike[0].innerHTML *1) + 1)