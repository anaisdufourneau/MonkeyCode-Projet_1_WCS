const title = document.querySelector('#title-hello');
const userMailInput = document.querySelector('#user-mail');
const btn = document.querySelector('.btn-confirm');

if(localStorage.getItem('firstName') !== null){
    title.innerHTML = `Hello ${localStorage.getItem('firstName')}, what is your <span class="mail">mail address </span>?`;
};

btn.addEventListener('click', () => {
    localStorage.setItem('userMail', userMailInput.value);
})