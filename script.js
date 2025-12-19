// JavaScript para Página Conmemorativa - Crucita Hernández
// Funcionalidades: animaciones, verificación de imagen, efectos

console.log('🔧 JavaScript cargado correctamente para página de Crucita Hernández');

// Función para verificar que la imagen se carga
function checkImageLoad() {
    console.log('🔍 Verificando carga de imagen...');
    const img = new Image();
    
    img.onload = function() {
        console.log('✅ Imagen cargada correctamente');
        document.body.classList.add('image-loaded');
    };
    
    img.onerror = function() {
        console.log('❌ Error cargando imagen');
        console.log('🔄 Probando ruta alternativa...');
        
        // Probar ruta alternativa
        const altImg = new Image();
        altImg.onload = function() {
            console.log('✅ Imagen cargada con ruta alternativa');
            document.querySelector('.hero-section').style.backgroundImage = 
                `linear-gradient(rgba(26, 77, 63, 0.3), rgba(26, 77, 63, 0.8)), url('./crucita_family_celebration.jpg')`;
            document.body.classList.add('image-loaded');
        };
        altImg.onerror = function() {
            console.log('❌ Error con ruta alternativa también');
            document.body.classList.add('image-error');
        };
        altImg.src = './crucita_family_celebration.jpg';
    };
    
    img.src = 'crucita_family_celebration.jpg';
}

// Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Configurar animaciones al cargar la página
function setupAnimations() {
    console.log('🎭 Configurando animaciones...');
    
    // Inicializar elementos para animación
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 800ms ease, transform 800ms ease';
        observer.observe(el);
    });
    
    // Agregar clase de prueba para verificar que el CSS funciona
    const testElement = document.createElement('div');
    testElement.className = 'test-style';
    testElement.innerHTML = '✅ CSS y JavaScript funcionando correctamente';
    document.body.appendChild(testElement);
    
    console.log('🎨 Estilos aplicados correctamente');
}

// Verificar preferencias de accesibilidad
function setupAccessibility() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        console.log('♿ Modo de movimiento reducido detectado');
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
}

// Efectos adicionales
function addInteractiveEffects() {
    // Efecto de hover en las tarjetas
    document.querySelectorAll('.mothers-day-card, .quote-section').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Efecto de click en el título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('click', function() {
            console.log('💖 Título de Crucita clickeado con amor');
            this.style.animation = 'fadeInUp 1000ms ease-out';
        });
    }
}

// Función de inicialización principal
function initializePage() {
    console.log('🚀 Inicializando página conmemorativa...');
    
    // Verificar que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setupAnimations();
            checkImageLoad();
            setupAccessibility();
            addInteractiveEffects();
        });
    } else {
        setupAnimations();
        checkImageLoad();
        setupAccessibility();
        addInteractiveEffects();
    }
    
    // Verificar carga de fuentes
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
            console.log('📝 Fuentes cargadas correctamente');
        });
    }
}

// Ejecutar inicialización
initializePage();

// Verificar que los estilos se han aplicado
window.addEventListener('load', function() {
    console.log('🌟 Página completamente cargada');
    
    // Verificar que las variables CSS están disponibles
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryColor = rootStyles.getPropertyValue('--primary-900');
    
    if (primaryColor) {
        console.log('🎨 Variables CSS funcionando correctamente');
    } else {
        console.log('⚠️ Variables CSS no detectadas');
    }
});

// Agregar evento de prueba para debugging
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        console.log('🔧 Modo de debugging activado');
        console.log('Elementos encontrados:', {
            hero: document.querySelector('.hero-section'),
            cards: document.querySelectorAll('.mothers-day-card').length,
            sections: document.querySelectorAll('.fade-in-up').length
        });
    }
});

console.log('✨ Script de Crucita Hernández completamente cargado');
