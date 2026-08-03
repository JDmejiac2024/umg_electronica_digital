// Variable global para rastrear en qué imagen estamos
let currentSlide = 0;

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
                observer.unobserve(entry.target); // Deja de observar una vez animado
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});