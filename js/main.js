/**
 * أُسطاوى (Ostawy) - Website JavaScript
 * Main functionality for the website
 */

// ========================================
// Navigation Toggle (Mobile)
// ========================================
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close nav when clicking outside
document.addEventListener('click', function (event) {
    const nav = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const navToggle = document.getElementById('navToggle');

    if (nav && navLinks && navToggle) {
        if (!nav.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    }
});

// ========================================
// Navbar Scroll Effect
// ========================================
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================
// FAQ Accordion
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', function () {
                // Check if this item is already active
                const isActive = item.classList.contains('active');

                // Close all items
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// ========================================
// Fade In Animation on Scroll
// ========================================
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Run on scroll and load
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile nav if open
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// ========================================
// Google Play Link Handler
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const playStoreLink = document.getElementById('playStoreLink');

    if (playStoreLink) {
        playStoreLink.addEventListener('click', function (e) {
            // If link is "#" (placeholder), show message
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('التطبيق سيتوفر قريباً على متجر Google Play!\n\nتابعنا للحصول على إشعار عند الإطلاق.');
            }
        });
    }
});

// ========================================
// Current Year for Footer
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});

// ========================================
// Lazy Loading for Images
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    const lazyLoad = function () {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
    };

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('load', lazyLoad);
}

// ========================================
// Console Welcome Message
// ========================================
console.log('%c أُسطاوى - Ostawy App ', 'background: #2196F3; color: white; font-size: 16px; padding: 10px 20px; border-radius: 5px;');
console.log('%c تطبيق تعليم إشارات المرور المصري ', 'color: #666; font-size: 12px;');
console.log('%c https://ostawy.com ', 'color: #2196F3;');

// ========================================
// Active Navigation Detection
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.href; // Use full URL for accurate comparison
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Compare the absolute href of the link with the current window URL
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Lightbox for App Screenshots
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="إغلاق">&times;</button>
            <button class="lightbox-nav lightbox-prev" aria-label="السابق"><i class="fas fa-chevron-right"></i></button>
            <img src="" alt="" class="lightbox-img">
            <button class="lightbox-nav lightbox-next" aria-label="التالي"><i class="fas fa-chevron-left"></i></button>
            <div class="lightbox-caption"></div>
            <div class="lightbox-counter"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Add lightbox styles
    const style = document.createElement('style');
    style.textContent = `
        #lightbox { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 10000; align-items: center; justify-content: center; }
        #lightbox.active { display: flex; }
        .lightbox-content { position: relative; max-width: 90vw; max-height: 90vh; text-align: center; }
        .lightbox-img { max-width: 100%; max-height: 85vh; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .lightbox-close { position: absolute; top: -40px; right: 0; background: none; border: none; color: white; font-size: 36px; cursor: pointer; padding: 10px; }
        .lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.15); border: none; color: white; font-size: 24px; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; transition: background 0.3s; }
        .lightbox-nav:hover { background: rgba(255,255,255,0.3); }
        .lightbox-prev { right: -70px; }
        .lightbox-next { left: -70px; }
        .lightbox-caption { color: white; margin-top: 15px; font-size: 1.1rem; }
        .lightbox-counter { color: rgba(255,255,255,0.6); margin-top: 8px; font-size: 0.9rem; }
        @media (max-width: 768px) { .lightbox-nav { display: none; } }
    `;
    document.head.appendChild(style);

    let currentIndex = 0;
    let images = [];

    // Get all phone screen images
    function initLightbox() {
        images = Array.from(document.querySelectorAll('.phone-screen img'));
        images.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openLightbox(index));
        });
    }

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        const img = images[currentIndex];
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const caption = lightbox.querySelector('.lightbox-caption');
        const counter = lightbox.querySelector('.lightbox-counter');

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        caption.textContent = img.alt;
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    function navigate(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        updateLightbox();
    }

    // Event listeners
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigate(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigate(1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigate(1);
        if (e.key === 'ArrowRight') navigate(-1);
    });

    // Initialize when DOM is ready
    setTimeout(initLightbox, 100);
});

