const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    // activate the hamburger class that turns the hamburger into an X
    hamburger.classList.toggle('active');
    // activate the nav-menu class that makes the menu appear
    navMenu.classList.toggle('active');
});


// when clicked on a link in the menu, the menu disappears

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));