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
