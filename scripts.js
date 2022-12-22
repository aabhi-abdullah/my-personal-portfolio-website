var moblie_nav = document.querySelector(".mobile-nav-icon");
var nav_header = document.querySelector(".nav-links");


var toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

moblie_nav.addEventListener('click', () => toggleNavbar());