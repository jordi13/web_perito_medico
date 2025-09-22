console.log("✅ scripts.js cargado 2");


// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Section fade-in system
function initializeSectionFadeIn() {
    const sections = document.querySelectorAll('section[data-animate]');
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize section fade-in when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeSectionFadeIn();
});

// Cerrar menú móvil al hacer clic en cualquier enlace
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

