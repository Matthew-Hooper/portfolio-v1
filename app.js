let button = document.querySelector(".toggle-button");

button.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
    let navLinks = document.querySelector(".navbar-links");
    navLinks.classList.toggle('active')
};