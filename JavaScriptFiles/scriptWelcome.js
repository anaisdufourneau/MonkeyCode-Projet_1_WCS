const btn = document.querySelector('.btn-confirm');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');

btn.addEventListener('click', () => {
    localStorage.setItem('firstName' , firstName.value)
    localStorage.setItem('lastName' , lastName.value)
})