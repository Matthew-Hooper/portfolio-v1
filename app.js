// Get button and toggle menu when clicked
let button = document.querySelector(".toggle-button");
button.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
    let navLinks = document.querySelector(".navbar-links");
    navLinks.classList.toggle('active')

    // Change burger menu into X 
    button.classList.toggle('change');
};

// Hides menu when clicked on something that's not the menu
let main = document.querySelector(".main");
main.addEventListener('click', closeNavMenu);

function closeNavMenu() {
    let navLinks = document.querySelector(".navbar-links");
    navLinks.classList.remove('active');
    button.classList.toggle('change');
};