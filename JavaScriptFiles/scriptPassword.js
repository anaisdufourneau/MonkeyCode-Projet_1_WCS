window.addEventListener('resize', function() {
    const logoMonkey = document.querySelector('.logo-monkey');
    if (window.innerWidth >= 992) {
        logoMonkey.src = 'Images/logoForDesktop.png';
    } else {
        logoMonkey.src = 'Images/logoMonkeytext.png';
    }
})