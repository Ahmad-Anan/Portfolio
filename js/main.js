// Module scripts run after the document is parsed, so the DOM is ready here.

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const openIcon = menuToggle.querySelector('[data-menu-icon="open"]');
const closeIcon = menuToggle.querySelector('[data-menu-icon="close"]');

const setMenuOpen = (open) => {
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    openIcon.classList.toggle('hidden', open);
    closeIcon.classList.toggle('hidden', !open);
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
// The result messages live in the markup (data-result), so each language page carries its own.
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('contact-submit');
const results = contactForm.querySelectorAll('[data-result]');

/** Shows one result message (or none) and moves focus to it, so it is announced. */
const showResult = (result) => {
    results.forEach((message) => {
        message.hidden = message.dataset.result !== result;
        if (!message.hidden) message.focus();
    });
};

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    showResult(null);
    const label = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = submitButton.dataset.sending;

    let result = 'error';
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { Accept: 'application/json' },
        });
        // 422: Formspree rejected a field (in practice, the email address); anything else non-OK is on Formspree's side.
        result = response.ok ? 'success' : response.status === 422 ? 'invalid' : 'error';
        if (response.ok) contactForm.reset();
    } catch {
        // Network failure: keep 'error'.
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = label;
        showResult(result);
    }
});
