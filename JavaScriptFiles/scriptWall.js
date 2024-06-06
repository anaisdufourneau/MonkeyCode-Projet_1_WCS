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

 banane.forEach(image => {
     image.addEventListener('click', () => {
        if(image.src.endsWith('banana_logo.png')){
            image.src = 'Images/bananeYellow.png';
            const logoArticle = image.closest('.Logo_article');
            const countLike = logoArticle.querySelector('.countLike');
            countLike.innerHTML = (countLike.innerHTML *1) + 1}
        else{
            image.src = "Images/banana_logo.png";
            const logoArticle = image.closest('.Logo_article');
            const countLike = logoArticle.querySelector('.countLike');
            countLike.innerHTML = (countLike.innerHTML *1) - 1;
        }
    });
 });
