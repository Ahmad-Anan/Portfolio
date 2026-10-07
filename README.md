# Portfolio

> The personal portfolio of Ahmed Maged Anan, Frontend Developer. A fast single-page site built with plain HTML, CSS, and JavaScript on top of a Vite + Tailwind CSS v4 build pipeline.

**Live site:** [portfolio-one-navy-65.vercel.app](https://portfolio-one-navy-65.vercel.app)

---

## Overview

This is the site I send to recruiters and clients. In one scroll it covers who I am, what I work with, what I've shipped, and how to reach me. It links to my flagship Angular projects, [KingMart](https://kingmart.vercel.app) and [Tawasol](https://tawasol-two.vercel.app).

It uses no framework on purpose. The page is plain HTML, CSS, and a small vanilla JavaScript module. A real build step still handles the parts that matter: repeated blocks (nav, social links, skills, projects, education) are rendered into `index.html` at build time from one data file, so the shipped page is fully static; Tailwind generates only the utilities the page uses; and CSS and JS are minified and content-hashed for long-term caching.

## Skills showcased

- **Data-driven static markup**: skills, projects, education, nav and social links live in `content/data.js` and are rendered by a small Vite plugin (`content/render.js`) whose `html` template tag escapes every value by default
- **Design tokens**: one set of CSS custom properties (color, radius, timing) feeds both the custom components and Tailwind's theme; Tailwind's default palette is removed so off-system colors can't be used
- **Accessibility**: landmarks and a clean heading outline (one `h1`, an `h2` per section, an `h3` per card), labelled form fields, 44px icon-link targets, `aria-current` on the active nav link, a visible `:focus-visible` ring everywhere, and contrast decisions documented next to each token
- **Platform features instead of JavaScript**: the photo lightbox is a native `<dialog>` (Escape, focus handling and backdrop built in) animated with `@starting-style`; section titles use scroll-driven animations (`animation-timeline: view()`); smooth scrolling and the sticky-nav offset are plain CSS (`scroll-behavior`, `scroll-padding-top`); all motion respects `prefers-reduced-motion`
- **Vanilla JavaScript**: an `IntersectionObserver` scroll-spy, an accessible mobile menu, and an async Formspree contact form with a honeypot, visible labels, focus moved to the result message, and separate handling for rejected input
- **Web performance**: inline SVG icons instead of an icon font, self-hosted Latin-subset fonts with the above-the-fold faces preloaded, responsive WebP images with explicit dimensions, lazy-loaded below-the-fold images, and purged, minified CSS. Mobile Lighthouse: 98–100
- **SEO & social sharing**: meta description, canonical URL, JSON-LD Person data, generated 1200×630 Open Graph cards, `robots.txt`, a sitemap, and a custom 404 page
- **Case studies**: each project page is data in `content/case-studies.js` rendered by one template, with every technical claim checked against that project's code

## Tech stack

**HTML5** · **CSS3** · **JavaScript (ES modules)** · **Tailwind CSS v4** · **PostCSS** · **Vite** · **Playwright** (CV and Open Graph image generation) · **Formspree** · **Vercel**

## Getting started

### Prerequisites

- Node.js 20.19+ (or 22.12+)
- npm

### Installation

```bash
git clone https://github.com/Ahmad-Anan/Portfolio.git
cd Portfolio
npm install
```

### Development server

```bash
npm run dev         # dev server with hot reload at http://localhost:5173
```

### Build

```bash
npm run build       # production build (minified, hashed assets) to dist/
npm run preview     # serve the production build at http://localhost:4173
npm run cv          # print cv/cv.html to public/pdf/CV_Anan-Frontend.pdf
npm run og          # render the Open Graph images in public/og/
```

### Editing content

To add a skill, project or course, add one object to `content/data.js`. The markup comes from `content/render.js`, so every card stays identical.

## Project structure

```
├── index.html          # page layout; <!-- render:* --> markers mark the generated blocks
├── projects/<slug>/    # one case-study page per project
├── 404.html            # served by Vercel for unknown URLs
├── content/
│   ├── data.js         # page content: nav, social links, skills, projects, experience, education
│   ├── case-studies.js # case-study content
│   ├── icons.js        # inline SVG icons (Font Awesome Free paths)
│   └── render.js       # build-time templates that turn the content into markup
├── css/style.css       # fonts, design tokens, Tailwind entry and components
├── js/main.js          # mobile menu, scroll-spy, photo lightbox, contact form
├── cv/cv.html          # source of the CV PDF
├── scripts/            # build-cv.mjs and build-og.mjs (Playwright)
├── public/             # copied as-is: fonts, images, OG cards, CV PDF, favicons, robots.txt, sitemap
├── vite.config.js      # builds every page and registers the render plugin
├── postcss.config.js   # Tailwind v4 PostCSS plugin
└── vercel.json         # Vercel build settings (Vite → dist/)
```

## Author

**Ahmed Anan**

- GitHub: [@Ahmad-Anan](https://github.com/Ahmad-Anan)
- LinkedIn: [ahmed-anan-285364273](https://linkedin.com/in/ahmed-anan-285364273)
- Email: [ahmed.anan.dev@gmail.com](mailto:ahmed.anan.dev@gmail.com)

---

<div dir="rtl">

# بورتفوليو

> البورتفوليو الشخصي لأحمد ماجد عنان، مطوّر واجهات أمامية. موقع صفحة واحدة سريع، مكتوب بـ HTML وCSS وJavaScript من غير فريم ورك، ومبني بـ Vite وTailwind CSS v4.

**رابط الموقع المباشر:** [portfolio-one-navy-65.vercel.app](https://portfolio-one-navy-65.vercel.app)

---

## نظرة عامة

ده الموقع اللي ببعته للـ recruiters والعملاء. في سكرول واحد بيعرض أنا مين، وبشتغل بإيه، وعملت إيه، وإزاي تتواصل معايا. وفيه روابط لأهم مشاريعي في Angular: [كينج مارت](https://kingmart.vercel.app) و[تواصل](https://tawasol-two.vercel.app).

من غير فريم ورك عن قصد. الصفحة HTML وCSS عادي مع موديول JavaScript صغير. ومع ذلك فيه build حقيقي بيهتم باللي يفرق: الأجزاء المتكررة (القائمة، ولينكات السوشيال، والمهارات، والمشاريع، والتعليم) بتتولّد جوه `index.html` وقت الـ build من ملف داتا واحد، فالصفحة اللي بتتنشر static بالكامل؛ وTailwind بيطلّع بس الـ classes المستخدمة فعلًا؛ والـ CSS والـ JS بيتضغطوا (minified) وبياخدوا hash في اسمهم عشان الكاش يفضل صالح لفترة طويلة.

## المهارات المعروضة

- **Markup ثابت متولّد من داتا**: المهارات والمشاريع والتعليم والقائمة ولينكات السوشيال موجودين في `content/data.js`، وبيترسموا بـ Vite plugin صغير (`content/render.js`) فيه template tag اسمه `html` بيعمل escape لكل قيمة افتراضيًا
- **Design tokens**: مجموعة واحدة من CSS custom properties (ألوان، وradius، وتوقيت) بتغذّي الـ components المخصوصة وثيم Tailwind مع بعض؛ وألوان Tailwind الافتراضية متشالة عشان محدش يستخدم لون برّه النظام
- **سهولة الوصول**: landmarks وترتيب عناوين نضيف (`h1` واحد، و`h2` لكل قسم، و`h3` لكل كارت)، وlabels لحقول الفورم، ومساحة لمس 44px للينكات الأيقونات، و`aria-current` على لينك القسم الحالي، وfocus ring واضح في كل مكان، وقرارات الكونتراست مكتوبة جنب كل token
- **مميزات المتصفح بدل JavaScript**: الـ lightbox بتاع الصورة عنصر `<dialog>` أصلي (Escape والـ focus والخلفية جاهزين) بأنيميشن بـ `@starting-style`؛ وعناوين الأقسام بتستخدم scroll-driven animations (`animation-timeline: view()`)؛ والسكرول الناعم ومسافة الـ nav الثابت بـ CSS بس (`scroll-behavior` و`scroll-padding-top`)؛ وكل الحركة بتحترم `prefers-reduced-motion`
- **JavaScript من غير مكتبات**: scroll-spy بـ `IntersectionObserver`، وقائمة موبايل accessible، وفورم تواصل بتبعت async لـ Formspree فيه honeypot وlabels ظاهرة، والـ focus بيروح لرسالة النتيجة، ورسالة خاصة لو البيانات اترفضت
- **أداء الويب**: صورة Hero بصيغة WebP مع fallback جوه `<picture>` و`fetchpriority` على صورة الـ LCP، وأبعاد صريحة للصور، وlazy loading للصور اللي تحت، وCSS متنضف ومضغوط (حوالي 5 kB بعد gzip)
- **SEO والمشاركة على السوشيال**: meta description، ورابط canonical، وبيانات JSON-LD لـ Person، وصور Open Graph مقاس 1200×630 بتتولّد بسكريبت، و`robots.txt`، وsitemap، وصفحة 404 مخصوصة
- **دراسات الحالة**: كل صفحة مشروع داتا في `content/case-studies.js` بتترسم بـ template واحد، وكل معلومة تقنية فيها متراجعة على كود المشروع نفسه

## التقنيات المستخدمة

**HTML5** · **CSS3** · **JavaScript (ES modules)** · **Tailwind CSS v4** · **PostCSS** · **Vite** · **Playwright** (توليد الـ CV وصور Open Graph) · **Formspree** · **Vercel**

## طريقة التشغيل محليًا

### المتطلبات

- Node.js إصدار 20.19 أو أحدث (أو 22.12+)
- npm

### التثبيت

```bash
git clone https://github.com/Ahmad-Anan/Portfolio.git
cd Portfolio
npm install
```

### سيرفر التطوير

```bash
npm run dev         # سيرفر تطوير مع hot reload على http://localhost:5173
```

### البناء

```bash
npm run build       # نسخة الإنتاج (ملفات مضغوطة وبـ hash) في dist/
npm run preview     # تشغيل نسخة الإنتاج على http://localhost:4173
npm run cv          # طباعة cv/cv.html لـ public/pdf/CV_Anan-Frontend.pdf
npm run og          # توليد صور Open Graph في public/og/
```

### تعديل المحتوى

عشان تضيف مهارة أو مشروع أو كورس، ضيف object واحد في `content/data.js`. الـ markup جاي من `content/render.js`، فكل الكروت بتفضل شبه بعض بالظبط.

## هيكل المشروع

```
├── index.html          # هيكل الصفحة؛ علامات <!-- render:* --> بتحدد الأجزاء المتولّدة
├── projects/<slug>/    # صفحة دراسة حالة لكل مشروع
├── 404.html            # Vercel بيعرضها لأي لينك مش موجود
├── content/
│   ├── data.js         # محتوى الصفحة: القائمة، والسوشيال، والمهارات، والمشاريع، والخبرات، والتعليم
│   ├── case-studies.js # محتوى دراسات الحالة
│   ├── icons.js        # أيقونات SVG inline (مسارات Font Awesome Free)
│   └── render.js       # templates وقت الـ build بتحوّل المحتوى لـ markup
├── css/style.css       # الخطوط، والـ design tokens، ومدخل Tailwind، والـ components
├── js/main.js          # قائمة الموبايل، ومتابعة السكرول، والـ lightbox، وفورم التواصل
├── cv/cv.html          # مصدر الـ CV بصيغة PDF
├── scripts/            # build-cv.mjs وbuild-og.mjs (بـ Playwright)
├── public/             # بيتنسخ زي ما هو: الخطوط، والصور، وصور OG، والـ CV، والأيقونات، وrobots.txt، والـ sitemap
├── vite.config.js      # بيبني كل الصفحات وبيسجّل الـ render plugin
├── postcss.config.js   # plugin الـ PostCSS بتاع Tailwind v4
└── vercel.json         # إعدادات البناء على Vercel (Vite ← dist/)
```

## المطوّر

**أحمد عنان**

- GitHub: [@Ahmad-Anan](https://github.com/Ahmad-Anan)
- LinkedIn: [ahmed-anan-285364273](https://linkedin.com/in/ahmed-anan-285364273)
- البريد الإلكتروني: [ahmed.anan.dev@gmail.com](mailto:ahmed.anan.dev@gmail.com)

</div>
