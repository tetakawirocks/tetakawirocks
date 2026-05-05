// ===== DESIERTO DE SONORA - JAVASCRIPT FUNCTIONALITY =====

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functionality
    initStarsCanvas();
    initNavigation();
    initScrollAnimations();

    // initContactForm(); // Removed per user request
    initGalleryLightbox();
    initSmoothScrolling();
});

// ===== STARS CANVAS ANIMATION =====
function initStarsCanvas() {
    const canvas = document.getElementById('stars-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Star class
    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.8 + 0.2;
            this.opacityDirection = Math.random() > 0.5 ? 1 : -1;
            this.opacitySpeed = Math.random() * 0.02 + 0.005;
        }
        
        update() {
            this.opacity += this.opacityDirection * this.opacitySpeed;
            
            if (this.opacity <= 0.2 || this.opacity >= 1) {
                this.opacityDirection *= -1;
            }
            
            // Keep opacity in bounds
            this.opacity = Math.max(0.2, Math.min(1, this.opacity));
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(253, 252, 246, ${this.opacity})`;
            ctx.fill();
            
            // Add twinkling effect
            if (Math.random() > 0.95) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 160, 23, ${this.opacity * 0.3})`;
                ctx.fill();
            }
        }
    }
    
    // Create stars
    const stars = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    // Respect user's motion preferences
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animate();
    }
}

// ===== NAVIGATION FUNCTIONALITY =====
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const menuIcon = navToggle.querySelector('.menu-icon');
            if (navMenu.classList.contains('active')) {
                menuIcon.setAttribute('data-lucide', 'x');
            } else {
                menuIcon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Enhanced active section highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Add click handlers for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only interfere with internal navigation (links starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                
                // Visual feedback
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = 'scale(1)';
                }, 150);
                
                scrollToSection(targetId);
                
            } else {
                // External links (including gallery to index) - let browser handle normally
                // Just add visual feedback
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = 'scale(1)';
                }, 150);
            }
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) {
                    const menuIcon = navToggle.querySelector('.menu-icon');
                    menuIcon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('gallery-item')) {
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
                
                if (entry.target.classList.contains('timeline-item')) {
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.2}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.about-card, .timeline-item, .gallery-item, .cert-item, .comp-category, .contact-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== LANGUAGE TOGGLE =====
function initLanguageToggle() {
    const langToggles = document.querySelectorAll('.lang-toggle');
    const content = {
        es: {
            'hero-subtitle': 'MSc Ciencias de la Tierra | Geóloga Profesional',
            'hero-description': 'Geóloga bilingüe con más de 7 años de experiencia en wellsite geology, mudlogging y compliance ambiental en Estados Unidos y México',
            'sobre-mi': 'Sobre Mí',
            'experiencia': 'Experiencia Profesional',
            'especialidades': 'Especialidades y Certificaciones',
            'galeria': 'Galería de Campo',
            'contacto': 'Contacto'
        },
        en: {
            'hero-subtitle': 'MSc Earth Sciences | Professional Geologist',
            'hero-description': 'Bilingual geologist with over 7 years of experience in wellsite geology, mudlogging, and environmental compliance in the United States and Mexico',
            'sobre-mi': 'About Me',
            'experiencia': 'Professional Experience',
            'especialidades': 'Specialties & Certifications',
            'galeria': 'Field Gallery',
            'contacto': 'Contact'
        }
    };
    
    let currentLang = 'es';
    
    langToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const newLang = toggle.dataset.lang;
            
            if (newLang !== currentLang) {
                // Update active state
                langToggles.forEach(t => t.classList.remove('active'));
                toggle.classList.add('active');
                
                // Update content
                Object.keys(content[newLang]).forEach(key => {
                    const element = document.querySelector(`[data-lang-key="${key}"]`) || 
                                   document.querySelector(`#${key} .section-title`) ||
                                   document.querySelector('.hero-subtitle') ||
                                   document.querySelector('.hero-description');
                    
                    if (element) {
                        element.textContent = content[newLang][key];
                    }
                });
                
                // Update navigation links
                const navLinks = document.querySelectorAll('.nav-link');
                const navContent = {
                    es: ['Inicio', 'Sobre Mí', 'Experiencia', 'Especialidades', 'Galería', 'Contacto'],
                    en: ['Home', 'About Me', 'Experience', 'Specialties', 'Gallery', 'Contact']
                };
                
                navLinks.forEach((link, index) => {
                    if (navContent[newLang][index]) {
                        link.textContent = navContent[newLang][index];
                    }
                });
                
                currentLang = newLang;
            }
        });
    });
}

// Contact form functionality removed per user request

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="notification-icon"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i data-lucide="x" class="close-icon"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--terracotta-strong)' : 'var(--ochre-gold)'};
        color: white;
        padding: 16px;
        border-radius: 8px;
        box-shadow: var(--shadow-elevated);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    lucide.createIcons();
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== GALLERY LIGHTBOX =====
function initGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption-text');
    
    // Global functions for HTML onclick handlers
    window.openLightbox = function(element) {
        const img = element.querySelector('img');
        const caption = element.querySelector('.overlay-content span');
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption.textContent;
        
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Add animation
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
    };
    
    window.closeLightbox = function() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
}

// CV Download functionality removed per user request

// ===== ADDITIONAL ANIMATION STYLES =====
const additionalStyles = `
    <style>
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-icon {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        margin-left: auto;
    }
    
    .close-icon {
        width: 16px;
        height: 16px;
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--sand-dune);
            flex-direction: column;
            padding: var(--spacing-md);
            box-shadow: var(--shadow-elevated);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-menu .nav-link {
            padding: var(--spacing-sm) 0;
            border-bottom: 1px solid var(--border-subtlety);
        }
        
        .nav-menu .nav-link:last-child {
            border-bottom: none;
        }
    }
    
    /* Enhanced gallery hover effects */
    .gallery-item:hover .gallery-overlay {
        background: linear-gradient(
            to top, 
            rgba(15, 23, 42, 0.9) 0%, 
            rgba(15, 23, 42, 0.4) 50%, 
            transparent 100%
        );
    }
    
    /* Enhanced button animations */
    .btn:hover .btn-icon {
        transform: translateX(2px);
        transition: transform 0.3s ease;
    }
    
    /* Parallax effect for desert silhouette */
    .desert-silhouette {
        will-change: transform;
    }
    
    /* Performance optimizations */
    .stars-canvas {
        will-change: contents;
    }
    
    /* Accessibility improvements */
    @media (prefers-reduced-motion: reduce) {
        .gallery-item,
        .timeline-item,
        .about-card,
        .cert-item,
        .comp-category,
        .contact-item {
            transition: none !important;
        }
        
        .notification {
            animation: none !important;
        }
    }
    </style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Desierto de Sonora - Page loaded in ${loadTime}ms`);
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.warn('Desierto de Sonora - Minor error:', e.error);
});

// ===== DESKTOP ENHANCEMENTS =====
if (window.innerWidth > 768) {
    // Add parallax effect to desert silhouette
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.desert-silhouette');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
    
    // Enhanced hover effects for timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(12px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}