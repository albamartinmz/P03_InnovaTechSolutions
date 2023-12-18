document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.getElementById('toggleMenu');
    const navbar = document.getElementById('navbar');
    const contactButton = document.querySelector('.contactButton');

    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            navbar.style.display = 'flex';
            contactButton.style.display = 'block';
        } else {
            navbar.style.display = 'none';
            contactButton.style.display = 'none';
        }
    });

    // Cerrar el menú al hacer clic en un enlace o en el botón
    const navLinks = document.querySelectorAll('.navBar p');
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    contactButton.addEventListener('click', closeMenu);

    function closeMenu() {
        toggleMenu.checked = false;
        navbar.style.display = 'none';
        contactButton.style.display = 'none';
    }
});