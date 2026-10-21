// Variable global para rastrear en qué imagen estamos en la galería
let currentSlide = 0;

// Función para el carrusel principal (Galería)
window.moveSlide = function(direction) {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (!track || slides.length === 0) return; 

    const totalSlides = slides.length;
    currentSlide = currentSlide + direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; 
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; 
    }

    const moveAmount = currentSlide * -100;
    track.style.transform = `translateX(${moveAmount}%)`;
};

// Función para deslizar los carruseles móviles (Principios y Hardware)
window.scrollContainer = function(containerId, direction) {
    const container = document.getElementById(containerId);
    if (container) {
        // Desplaza el ancho de una tarjeta (aprox el 85% de la pantalla)
        const scrollAmount = container.clientWidth * 0.85; 
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. EFECTO MÁQUINA DE ESCRIBIR
    const titleText = "Sistema de detección y monitoreo de calidad del aire.";
    const titleElement = document.getElementById("typewriter");
    let index = 0;

    function typeWriter() {
        if (titleElement && index < titleText.length) {
            titleElement.innerHTML += titleText.charAt(index);
            index++;
            setTimeout(typeWriter, 80); 
        }
    }
    
    if (titleElement) {
        setTimeout(typeWriter, 300);
    }

    // 2. ANIMACIÓN SCROLL REVEAL (Aparición dinámica)
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
