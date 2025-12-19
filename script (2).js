// Celebración del Día de las Madres - Crucita Hernández

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para navegación
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.biography-card, .message-card, .gallery-item, .tribute-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Efecto parallax suave en el hero
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            if (scrolled <= hero.offsetHeight) {
                heroImage.style.transform = `translateY(${parallax}px)`;
            }
        });
    }

    // Efecto hover para imágenes de galería
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02) translateY(-2px)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Animación de aparición gradual para texto
    const textElements = document.querySelectorAll('.biography-text-content, .tribute-script, .message-text');
    textElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('fade-in-text');
    });

    // CSS para animación de texto
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-text {
            animation: fadeInUp 0.8s ease forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .gallery-image {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .message-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 50px -10px rgba(74, 66, 56, 0.15);
            transition: all 0.3s ease;
        }
        
        .biography-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 45px -10px rgba(74, 66, 56, 0.12);
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Efecto de partículas flotantes (opcional - solo si el navegador lo soporta)
    if (window.requestAnimationFrame) {
        createFloatingParticles();
    }

    function createFloatingParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        // Crear partículas decorativas
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.innerHTML = '✿';
            particle.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 10}px;
                color: rgba(197, 160, 89, 0.3);
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 5}s infinite linear;
            `;
            
            hero.appendChild(particle);
        }

        // CSS para animación de partículas
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-10vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(particleStyle);
    }

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });

    // CSS para lazy loading
    const lazyStyle = document.createElement('style');
    lazyStyle.textContent = `
        .lazy {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .lazy.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(lazyStyle);

    // Efecto de texto que se escribe gradualmente (para tribute)
    const tributeText = document.querySelector('.tribute-main');
    if (tributeText) {
        const text = tributeText.textContent;
        tributeText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tributeText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar animación cuando el elemento sea visible
        const tributeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    tributeObserver.unobserve(entry.target);
                }
            });
        });
        
        tributeObserver.observe(tributeText);
    }

    // Efecto de hover para cards de mensajes
    const messageCards = document.querySelectorAll('.message-card');
    messageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Función para manejar el redimensionamiento de ventana
window.addEventListener('resize', function() {
    // Recalcular elementos si es necesario
    const gallery = document.querySelector('.gallery-masonry');
    if (gallery) {
        // Forzar reflow para masonry layout
        gallery.style.display = 'none';
        gallery.offsetHeight; // Trigger reflow
        gallery.style.display = '';
    }
});