// Page content. Rendered into index.html at build time by content/render.js,
// so adding a skill or project means adding one object here, not copying markup.

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#profile', label: 'Profile' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Edu & Lang' },
  { href: '#contact', label: 'Contact' },
];

export const social = [
  { icon: 'fab fa-linkedin', label: 'Ahmed Anan on LinkedIn', tooltip: 'Anan-LinkedIn', href: 'https://www.linkedin.com/in/ahmed-anan-285364273/' },
  { icon: 'fab fa-github', label: 'Ahmed Anan on GitHub', tooltip: 'Anan-GitHub', href: 'https://github.com/Ahmad-Anan' },
  { icon: 'fab fa-facebook', label: 'Ahmed Anan on Facebook', tooltip: 'Anan-Facebook', href: 'https://www.facebook.com/profile.php?id=100011629367323' },
  { icon: 'fas fa-envelope', label: 'Email Ahmed Anan', tooltip: 'Anan-Email', href: 'mailto:ahmed.anan.dev@gmail.com' },
  { icon: 'fab fa-whatsapp', label: 'Message Ahmed Anan on WhatsApp', tooltip: 'Anan-WhatsApp', href: 'https://wa.me/+201002416804' },
];

export const skills = [
  { icon: 'fab fa-angular', name: 'Angular', note: 'Building SPAs with Signals, zoneless change detection, and SSR.' },
  { icon: 'fas fa-code', name: 'TypeScript', note: 'Typed services, models, and components, structured with SOLID principles.' },
  { icon: 'fab fa-js', name: 'JavaScript', note: 'Modern ES6+: modules, classes, and async/await.' },
  { icon: 'fas fa-code', name: 'jQuery', note: 'DOM manipulation, events, and animations.' },
  { icon: 'fas fa-wind', name: 'TailwindCSS', note: 'Utility-first styling with shared design tokens.' },
  { icon: 'fab fa-html5', name: 'HTML5', note: 'Semantic, accessible markup.' },
  { icon: 'fab fa-css3', name: 'CSS3', note: 'Responsive layouts with Grid and Flexbox, plus transitions.' },
  { icon: 'fab fa-sass', name: 'SASS', note: 'Variables, mixins, and partials for organized stylesheets.' },
  { icon: 'fas fa-cubes', name: 'PrimeNG', note: 'Building Angular interfaces from PrimeNG components.' },
  { icon: 'fab fa-bootstrap', name: 'Bootstrap', note: 'Responsive grid and components.' },
  { icon: 'fas fa-cubes', name: 'NgBootstrap', note: 'Bootstrap components as native Angular directives.' },
  { icon: 'fas fa-layer-group', name: 'Flowbite', note: 'Tailwind-based UI components.' },
  { icon: 'fab fa-figma', name: 'Figma', note: 'Turning UI/UX designs into components and prototyping layouts.' },
  { icon: 'fas fa-vial', name: 'Unit Testing (Jasmine)', note: 'Testing Angular components and services with Jasmine.' },
  { icon: 'fab fa-github', name: 'Git & GitHub', note: 'Branching, pull requests, and version history.' },
];

export const projects = [
  {
    icon: 'fas fa-crown',
    title: 'KingMart — Luxury E-Commerce Platform',
    description: 'Architected a full-featured e-commerce platform in Angular 22 (Signals, Zoneless change detection, OnPush by default), built around a custom "quiet luxury" design system with a bespoke dark mode and full Arabic/English RTL support. Implemented Signal-based Cart and Wishlist services with SSR-safe auth guards, a Stripe-integrated checkout flow, and a custom quantity stepper.',
    tags: ['Angular 22', 'TypeScript', 'Tailwind CSS v4', 'PrimeNG 22', 'Stripe', 'SSR'],
    demo: 'https://kingmart.vercel.app',
    source: 'https://github.com/Ahmad-Anan/kingmart',
  },
  {
    icon: 'fas fa-comments',
    title: 'Tawasol — Social Media Platform',
    description: 'Built a LinkedIn-style social platform end-to-end in Angular 22 (Zoneless, Signals, SSR) — authentication, a filterable infinite-scroll feed, profiles, threaded comments with likes and replies, bookmarks, and live notification badges backed by real REST APIs. Unified design-token color system audited for WCAG AA contrast in both themes.',
    tags: ['Angular 22', 'TypeScript', 'Angular Material', 'Tailwind CSS v4', 'SSR', 'REST APIs'],
    demo: 'https://tawasol-two.vercel.app',
    source: 'https://github.com/Ahmad-Anan/tawasol',
  },
];

// Earlier course projects: one line each under Projects, without cards.
export const earlierWork = [
  {
    title: 'Yummy',
    summary: 'Recipe browser on TheMealDB API: search, categories, cuisines, and ingredients.',
    demo: 'https://yummy-livid-five.vercel.app/',
    source: 'https://github.com/Ahmad-Anan/Yummy',
  },
  {
    title: 'Game OOP',
    summary: 'Free-to-play game catalog built with ES6 classes and modules.',
    demo: 'https://game-seven-dun.vercel.app/',
    source: 'https://github.com/Ahmad-Anan/Game',
  },
];

export const education = [
  {
    icon: 'fas fa-code',
    title: 'Diploma in Frontend Development',
    school: 'Route Academy',
    period: 'Jun 2024 – Feb 2025',
    description: 'Built Angular applications with TypeScript, JavaScript, and Tailwind CSS through project-based coursework.',
  },
  {
    icon: 'fas fa-object-group',
    title: 'Frontend Development Training',
    school: 'Code Alpha',
    period: 'Jan 2025 – Mar 2025',
    description: 'Focused on HTML5, CSS3, and modern JavaScript (ES6+), building responsive web interfaces.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: "Bachelor's in Business Administration",
    school: 'Al-Azhar University',
    period: '2019 – 2023',
    description: 'Gained skills in strategic management, problem-solving, and data analysis.',
  },
];
