// CLIQUE LISTE INTERESTED  

const listeLogoLanguage = document.querySelectorAll(".listeLogo");
const footerBtn = document.querySelector("#footerInterest");

listeLogoLanguage.forEach(logo => {
    logo.addEventListener("click", () => {
        logo.style.background = "#494634";
        footerBtn.style.display = 'flex';
    });
});

// LOGO 
const logoMonkey = document.querySelector('.logo-monkey');
if (window.innerWidth >= 992) {
    logoMonkey.src = 'Images/logoForDesktop.png';
} 