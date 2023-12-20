/* Menú hamburguesa */

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

/* Scroll suave hacia las diferentes partes de la página */

document.addEventListener('DOMContentLoaded', function () {
    // Asegurarse de que todas las secciones estén listas antes de intentar scroll
    document.querySelectorAll('.scroll-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Obtener el ID del objetivo
            const targetElement = document.getElementById(targetId); // Obtener el elemento objetivo

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll suavemente al elemento
            }
        });
    });
});

/* Flecha que te devuelve al inicio de la página */

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Muestra u oculta el botón según el desplazamiento de la página
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    // Maneja el evento de clic para hacer scroll hacia arriba
    scrollToTopBtn.addEventListener('click', function () {
        // Hace scroll suavemente hacia arriba
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});