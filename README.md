# Portfolio

> The personal portfolio of Ahmed Maged Anan, Frontend Developer. A fast, animated single-page site built with plain HTML, CSS, and JavaScript on top of a Vite + Tailwind CSS v4 build pipeline.

**Live site:** [portfolio-one-navy-65.vercel.app](https://portfolio-one-navy-65.vercel.app)

---

## Overview

This is the site I send to recruiters and clients. In one scroll it covers who I am, what I work with, what I've shipped, and how to reach me. It links to my flagship Angular projects, [KingMart](https://kingmart.vercel.app) and [Tawasol](https://tawasol-two.vercel.app).

It uses no framework on purpose. The page is plain HTML, CSS, and a small vanilla JavaScript module. A real build step still handles the parts that matter for performance: Tailwind generates only the utilities the page uses, and CSS and JS are minified and content-hashed for long-term caching. The hero image ships as WebP with a PNG fallback.

## Skills showcased

- **Semantic, accessible markup**: landmark sections, `aria-label`s on icon-only links, keyboard-visible tooltips, and `lang`/`dir` on Arabic text
- **Responsive layout**: mobile-first Tailwind grid and flex layouts, with a collapsible mobile menu
- **Motion design**: CSS keyframe entrance animations triggered by `IntersectionObserver`, plus hover and parallax effects
- **Vanilla JavaScript**: scroll-spy navigation with a throttled scroll handler, an image lightbox, and a smooth back-to-top button, all using `addEventListener` with no inline handlers
- **Async form handling**: the contact form posts to Formspree with `fetch`, with loading, success, and error states announced through ARIA live regions
- **Web performance**: WebP hero with `<picture>` fallback, `fetchpriority` on the LCP image, preconnects to font and icon CDNs, and purged, minified CSS
- **SEO & social sharing**: meta description, canonical URL, Open Graph, and Twitter Card tags

## Tech stack

**HTML5** · **CSS3** · **JavaScript (ES modules)** · **Tailwind CSS v4** · **PostCSS** · **Vite** · **Font Awesome** · **Formspree** · **Vercel**

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
```

## Project structure

```
├── index.html          # the single page: all sections and markup
├── css/style.css       # Tailwind entry (@import "tailwindcss") + custom styles/animations
├── js/main.js          # menu, scroll-spy, animations, lightbox, contact form
├── public/             # copied as-is: images, CV PDF, favicon
├── postcss.config.js   # Tailwind v4 PostCSS plugin
└── vercel.json         # Vercel build settings (Vite → dist/)
```

## Author

**Ahmed Anan**

- GitHub: [@Ahmad-Anan](https://github.com/Ahmad-Anan)
- LinkedIn: [ahmed-anan-285364273](https://linkedin.com/in/ahmed-anan-285364273)
- Email: [enan611@gmail.com](mailto:enan611@gmail.com)

---

<div dir="rtl">

# بورتفوليو

> البورتفوليو الشخصي لأحمد ماجد عنان، مطوّر واجهات أمامية. موقع صفحة واحدة سريع وفيه أنيميشن، مكتوب بـ HTML وCSS وJavaScript من غير فريم ورك، ومبني بـ Vite وTailwind CSS v4.

**رابط الموقع المباشر:** [portfolio-one-navy-65.vercel.app](https://portfolio-one-navy-65.vercel.app)

---

## نظرة عامة

ده الموقع اللي ببعته للـ recruiters والعملاء. في سكرول واحد بيعرض أنا مين، وبشتغل بإيه، وعملت إيه، وإزاي تتواصل معايا. وفيه روابط لأهم مشاريعي في Angular: [كينج مارت](https://kingmart.vercel.app) و[تواصل](https://tawasol-two.vercel.app).

من غير فريم ورك عن قصد. الصفحة HTML وCSS عادي مع موديول JavaScript صغير. ومع ذلك فيه build حقيقي بيهتم بالأداء: Tailwind بيطلّع بس الـ classes المستخدمة فعلًا، والـ CSS والـ JS بيتضغطوا (minified) وبياخدوا hash في اسمهم عشان الكاش يفضل صالح لفترة طويلة. وصورة الـ Hero بتتحمّل WebP مع fallback لـ PNG.

## المهارات المعروضة

- **Markup دلالي وسهل الوصول**: أقسام landmark، و`aria-label` على اللينكات اللي أيقونة بس، وtooltips بتظهر مع الكيبورد، و`lang`/`dir` على النص العربي
- **تصميم متجاوب**: layouts بـ grid وflex في Tailwind بتبدأ من الموبايل، مع قائمة موبايل بتتفتح وتتقفل
- **تصميم الحركة**: أنيميشن دخول بـ CSS keyframes بيشتغل عن طريق `IntersectionObserver`، مع تأثيرات hover وparallax
- **JavaScript من غير مكتبات**: nav بيعلّم القسم الحالي أثناء السكرول مع throttle، وlightbox للصور، وزرار رجوع لأول الصفحة بسكرول ناعم، وكله بـ `addEventListener` من غير handlers جوه الـ HTML
- **فورم بتتبعت async**: فورم التواصل بتبعت لـ Formspree بـ `fetch`، مع حالات تحميل ونجاح وخطأ بتتقري بـ ARIA live regions
- **أداء الويب**: صورة Hero بصيغة WebP مع fallback جوه `<picture>`، و`fetchpriority` على صورة الـ LCP، وpreconnect لخوادم الخطوط والأيقونات، وCSS متنضف ومضغوط
- **SEO والمشاركة على السوشيال**: meta description، ورابط canonical، وtags لـ Open Graph وTwitter Card

## التقنيات المستخدمة

**HTML5** · **CSS3** · **JavaScript (ES modules)** · **Tailwind CSS v4** · **PostCSS** · **Vite** · **Font Awesome** · **Formspree** · **Vercel**

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
```

## هيكل المشروع

```
├── index.html          # الصفحة الوحيدة: كل الأقسام والـ markup
├── css/style.css       # مدخل Tailwind (@import "tailwindcss") + التنسيقات والأنيميشن المخصوصة
├── js/main.js          # القائمة، ومتابعة السكرول، والأنيميشن، والـ lightbox، وفورم التواصل
├── public/             # بيتنسخ زي ما هو: الصور، والـ CV بصيغة PDF، والـ favicon
├── postcss.config.js   # plugin الـ PostCSS بتاع Tailwind v4
└── vercel.json         # إعدادات البناء على Vercel (Vite ← dist/)
```

## المطوّر

**أحمد عنان**

- GitHub: [@Ahmad-Anan](https://github.com/Ahmad-Anan)
- LinkedIn: [ahmed-anan-285364273](https://linkedin.com/in/ahmed-anan-285364273)
- البريد الإلكتروني: [enan611@gmail.com](mailto:enan611@gmail.com)

</div>
