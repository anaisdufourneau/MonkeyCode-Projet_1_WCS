// CLIQUE LISTE INTERESTED  

const listeLogoLanguage = document.querySelectorAll(".listeLogo");
const footerBtn = document.querySelector("#footerInterest");

listeLogoLanguage.forEach(logo => {
    logo.addEventListener("click", () => {
        logo.style.background = "#494634";
        footerBtn.style.display = 'flex';
    });
});