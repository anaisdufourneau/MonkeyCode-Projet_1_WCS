// LOGO 

const logoMonkey = document.querySelector('.logo-monkey');

    if(window.innerWidth >= 992) {
        logoMonkey.src = 'Images/logoForDesktop.png';
    };
    
    // BUTTON -> next page

const btn = document.querySelector('#btn-confirm');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');

btn.addEventListener('click', () => {
    localStorage.setItem('firstName' , firstName.value);
    localStorage.setItem('lastName' , lastName.value);
});




