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



 // toggle new article 


 const openNewArticle = document.querySelector('#nouvelle_article');
 const closeNewArticle = document.querySelector('#article_close');
 const divArticle = document.querySelector('#new_article');

 openNewArticle.addEventListener("click", () => {
    divArticle.style.display = "flex";
 }) 

 closeNewArticle.addEventListener("click" , () => {
    divArticle.style.display = "none";
 })
// END !!!!!!!!

//   Creat new article !!!!!!!!!!!!!!!!!!!!!!!

const articleArea = document.querySelector('#main-article');

function createArticle(firstName, lastName, urlImage, description){
    const article = document.createElement('div');
    article.classList.add('Publication');
    articleArea.appendChild(article);

    const headArticle = document.createElement('div');
    headArticle.classList.add('first_item');
    article.appendChild(headArticle);

    const articleProfil = document.createElement('div');
    articleProfil.classList.add('article_profil');
    headArticle.appendChild(articleProfil);

    const logoProfil = document.createElement('div');
    logoProfil.classList.add('logo_profile');
    articleProfil.appendChild(logoProfil);

    const imgProfil = document.createElement('img');
    imgProfil.src = "Images/Alex_pic.png"
    logoProfil.appendChild(imgProfil);

    const pProfil = document.createElement('p');
    pProfil.classList.add('name_profil');
    pProfil.innerHTML = `${firstName}  ${lastName}`
    articleProfil.appendChild(pProfil);

    const btnArtAdd = document.createElement('button');
    btnArtAdd.classList.add('button_add');
    btnArtAdd.innerHTML = "Add contact +";
    headArticle.appendChild(btnArtAdd);

    const mainArticle = document.createElement('div');
    mainArticle.classList.add('seconde_item');
    article.appendChild(mainArticle);

    const descriptionArticle = document.createElement('p');
    descriptionArticle.innerHTML = `${description}`; //Mettre la description avec le local storage sans oublier d'integrer un lien(a) dedans
    mainArticle.appendChild(descriptionArticle);

    const imgArticle = document.createElement('div');
    imgArticle.classList.add("image_alex");
    imgArticle.style.background = url(''); // mettre le liens du link avec local storage
    mainArticle.appendChild(imgArticle);

    const trait = document.createElement('hr');
    trait.classList.add('trait');
    mainArticle.appendChild(trait);

    const rsBtn = document.createElement('div');
    rsBtn.classList.add('button_interaction');
    mainArticle.appendChild(rsBtn);

    const gaucheDiv = document.createElement('div');
    gaucheDiv.classList.add('cote_gauche');
    rsBtn.appendChild(gaucheDiv);

    const logoLike = document.createElement('div');
    logoLike.classList.add('Logo_article');
    gaucheDiv.appendChild(logoLike);

    const imgLike = document.createElement('img');
    imgLike.classList.add('bananeToggle');
    imgLike.src = "Images/banana_logo.png";
    logoLike.appendChild(imgLike);

    const pLike = document.createElement('p');
    pLike.classList.add('countLike');
    logoLike.appendChild(pLike);

    const logoComm = document.createElement('div');
    logoComm.classList.add('Logo_article');
    gaucheDiv.appendChild(logoComm);

    const imgComm = document.createElement('img');
    imgComm.src = "Images/banana_logo.png";
    logoComm.appendChild(imgComm);

    const droiteDiv = document.createElement('div');
    droiteDiv.classList.add('cote_droit');
    rsBtn.appendChild(droiteDiv);

    const logoShare = document.createElement('div');
    logoShare.classList.add('Logo_article');
    droiteDiv.appendChild(logoShare);

    const imgShare = document.createElement('img');
    imgShare.src = "Images/Share_logo.png";
    logoShare.appendChild(imgShare);

    const logoWarn = document.createElement('div');
    logoWarn.classList.add('Logo_article');
    droiteDiv.appendChild(logoWarn);

    const imgWarn = document.createElement('img');
    imgWarn.src = "Images/Signal_black.png";
    logoWarn.appendChild(imgWarn);
}


// createArticle(localStorage.getItem('firstName'),localStorage.getItem('lastName'),localStorage.getItem('userLiens'))

 