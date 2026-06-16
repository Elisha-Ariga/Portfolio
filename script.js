const menuIcon = document('#menu-icon');
const navLinks = document('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}