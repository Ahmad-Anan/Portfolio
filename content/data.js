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
  { icon: 'fas fa-envelope', label: 'Email Ahmed Anan', tooltip: 'Anan-Email', href: 'mailto:enan611@gmail.com' },
  { icon: 'fab fa-whatsapp', label: 'Message Ahmed Anan on WhatsApp', tooltip: 'Anan-WhatsApp', href: 'https://wa.me/+201002416804' },
];

export const skills = [
  { icon: 'fas fa-laptop-code', name: 'Software Developer', note: 'Versatile Software Engineer building efficient, scalable, and maintainable software solutions.' },
  { icon: 'fas fa-layer-group', name: 'Front-End Developer', note: 'Skilled Front-End Developer crafting responsive, modern, and user-friendly interfaces.' },
  { icon: 'fab fa-angular', name: 'Angular', note: 'Expert in building scalable SPA applications.' },
  { icon: 'fas fa-code', name: 'TypeScript', note: 'Strong typing for robust applications.' },
  { icon: 'fab fa-js', name: 'JavaScript', note: 'Proficient in ES6+ and dynamic scripting.' },
  { icon: 'fas fa-code', name: 'jQuery', note: 'Efficient DOM manipulation and event handling.' },
  { icon: 'fas fa-wind', name: 'TailwindCSS', note: 'Skilled in utility-first CSS for rapid UI design.' },
  { icon: 'fab fa-html5', name: 'HTML5', note: 'Mastered semantic markup and accessibility.' },
  { icon: 'fab fa-css3', name: 'CSS3', note: 'Advanced animations and responsive layouts.' },
  { icon: 'fab fa-sass', name: 'SASS', note: 'Advanced CSS preprocessing with variables and mixins.' },
  { icon: 'fas fa-cubes', name: 'PrimeNG', note: 'Proficient in Angular UI component library.' },
  { icon: 'fab fa-bootstrap', name: 'Bootstrap', note: 'Responsive grid system and components.' },
  { icon: 'fas fa-cubes', name: 'NgBootstrap', note: 'Bootstrap integration with Angular.' },
  { icon: 'fas fa-layer-group', name: 'Flowbite', note: 'Tailwind-based component library expertise.' },
  { icon: 'fab fa-figma', name: 'Figma', note: 'UI/UX design and prototyping.' },
  { icon: 'fas fa-pencil-ruler', name: 'UI/UX Developer', note: 'User-centered design principles.' },
  { icon: 'fas fa-cogs', name: 'SOLID', note: 'Applying SOLID principles for clean code.' },
  { icon: 'fas fa-vial', name: 'Unit Testing (Jasmine)', note: 'Testing Angular apps with Jasmine.' },
  { icon: 'fab fa-github', name: 'Git & GitHub', note: 'Version control and collaboration expert.' },
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
  {
    icon: 'fas fa-code',
    title: 'jQuery Website',
    description: 'A simple jQuery website utilizing jQuery for easy DOM manipulation, enhancing interactivity and user experience with animations.',
    tags: ['jQuery', 'Bootstrap'],
    demo: 'https://j-query-three.vercel.app/',
    source: 'https://github.com/Ahmad-Anan/jQuery',
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Game OOP',
    description: 'Created a game website using object-oriented programming and APIs to manage user interactions and dynamic content.',
    tags: ['OOP JavaScript', 'Bootstrap'],
    demo: 'https://game-seven-dun.vercel.app/',
    source: 'https://github.com/Ahmad-Anan/Game',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Yummy',
    description: 'A culinary website offering recipes, cooking tips, and food blogs for enthusiasts.',
    tags: ['HTML', 'Bootstrap', 'JavaScript'],
    demo: 'https://yummy-livid-five.vercel.app/',
    source: 'https://github.com/Ahmad-Anan/Yummy',
  },
  {
    icon: 'fas fa-wind',
    title: 'Weather-API',
    description: 'Create a weather API Design a robust weather API utilizing and display weather to deliver real-time weather data.',
    tags: ['HTML', 'Bootstrap', 'JavaScript', 'OOP', 'API'],
    demo: 'https://weather-api-six-theta.vercel.app/',
    source: 'https://github.com/Ahmad-Anan/Weather-API',
  },
];

export const education = [
  {
    icon: 'fas fa-code',
    title: 'Diploma in Frontend Development',
    school: 'Route Academy',
    period: 'Jun 2024 – Feb 2025',
    description: 'Mastered modern frontend technologies including Angular, JavaScript, TypeScript, and Tailwind CSS.',
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
