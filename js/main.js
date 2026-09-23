// Module scripts run after the document is parsed, so the DOM is ready here.

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuToggle.querySelector('i');

const setMenuOpen = (open) => {
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuIcon.classList.toggle('fa-bars', !open);
    menuIcon.classList.toggle('fa-xmark', open);
};

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

// Close the menu once a link in it is chosen.
mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
});

// Scroll-spy: mark the nav link of whichever section crosses the middle of the viewport.
const navLinks = document.querySelectorAll('.nav-link');
const spy = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const hash = `#${entry.target.id}`;
        navLinks.forEach((link) => {
            if (link.getAttribute('href') === hash) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    }
}, { rootMargin: '-50% 0px -50% 0px' });
document.querySelectorAll('header[id], section[id]').forEach((section) => spy.observe(section));

// Photo lightbox: the <dialog> handles Escape, focus and the backdrop; any click closes it.
const photoDialog = document.getElementById('photo-dialog');
document.getElementById('photo-trigger').addEventListener('click', () => photoDialog.showModal());
photoDialog.addEventListener('click', () => photoDialog.close());

// Footer year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Contact form: post to Formspree without leaving the page.
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('contact-submit');
const successMessage = document.getElementById('form-success');
const errorMessage = document.getElementById('form-error');

const showResult = (result) => {
    successMessage.hidden = result !== 'success';
    errorMessage.hidden = result !== 'error';
};

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    showResult(null);
    const label = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
        contactForm.reset();
        showResult('success');
    } catch {
        showResult('error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = label;
    }
});
