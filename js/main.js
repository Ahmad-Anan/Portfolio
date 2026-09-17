document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully 🚀");

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
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

    // Navbar Animation on Load
    const navSection = document.querySelector('.nav-section');
    navSection.style.opacity = '0';
    setTimeout(() => navSection.style.opacity = '1', 100);

    // Intersection Observer for Sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                const animatedElements = entry.target.querySelectorAll('.animate-flip-in');
                animatedElements.forEach(el => el.classList.add('group'));

                // Back to Top
                if (entry.target.classList.contains('footer-section')) {
                    const backToTop = entry.target.querySelector('a[href="#home"]');
                    backToTop.addEventListener('click', (e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                }
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.content-section, .footer-section, #home').forEach(section => observer.observe(section));

    // Lazy Load Images
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imgObserver.unobserve(img);
            }
        });
    });
    document.querySelectorAll('.lazy-load').forEach(img => imgObserver.observe(img));
});

// Image enlargement
function toggleEnlargeImage(imgElement) {
    const overlay = document.getElementById('image-overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    
    enlargedImage.src = imgElement.src;
    
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);
}

function closeEnlargedImage(event) {
    if (event.target.id !== 'enlarged-image') {
        const overlay = document.getElementById('image-overlay');
        overlay.classList.remove('show');
        
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 500);
    }
}

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('open');
        }, 10);
    } else {
        mobileMenu.classList.remove('open');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500);
    }
    this.classList.toggle('open');
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