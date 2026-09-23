document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuToggle.querySelector('i');
    let menuOpen = false;
    let menuHideTimer;
    menuToggle.addEventListener('click', () => {
        const opening = !menuOpen;
        menuOpen = opening;
        clearTimeout(menuHideTimer);
        if (opening) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => mobileMenu.classList.add('open'), 10);
        } else {
            mobileMenu.classList.remove('open');
            menuHideTimer = setTimeout(() => mobileMenu.classList.add('hidden'), 500);
        }
        menuToggle.classList.toggle('open', opening);
        menuToggle.setAttribute('aria-expanded', String(opening));
        menuIcon.classList.toggle('fa-bars', !opening);
        menuIcon.classList.toggle('fa-times', opening);
    });

    // Throttle Function for Scroll Events
    const throttle = (func, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // Active Link Highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, header');
    const updateActiveLink = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) currentSection = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) link.classList.add('active');
        });
    };
    window.addEventListener('scroll', throttle(updateActiveLink, 100));
    updateActiveLink();

    // Back to Top
    const backToTop = document.querySelector('.footer-section a[href="#home"]');
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Image enlargement
    const profilePhoto = document.getElementById('profile-photo');
    const overlay = document.getElementById('image-overlay');
    const enlargedImage = document.getElementById('enlarged-image');

    profilePhoto.addEventListener('click', () => {
        enlargedImage.src = profilePhoto.currentSrc || profilePhoto.src;
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('show'), 10);
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === enlargedImage) return;
        overlay.classList.remove('show');
        setTimeout(() => overlay.classList.add('hidden'), 500);
    });
});

// Footer year
const currentYearEl = document.getElementById('current-year');
if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

// Form submission (Formspree)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const submitButton = document.getElementById('contact-submit');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        successMessage.style.opacity = '0';
        errorMessage.style.opacity = '0';
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                successMessage.style.opacity = '1';
                contactForm.reset();
                setTimeout(() => { successMessage.style.opacity = '0'; }, 5000);
            } else {
                errorMessage.style.opacity = '1';
            }
        } catch (err) {
            errorMessage.style.opacity = '1';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}