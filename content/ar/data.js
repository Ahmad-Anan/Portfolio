// Arabic page content for /ar/. Icons, links and tags come from the English data in
// ../data.js; only the text is translated here, keyed to the English item it replaces.
// A new English item without an Arabic entry fails the build instead of shipping English.
import * as en from '../data.js';

/** Overlays the Arabic text onto each English item, matched by `key`. */
const translate = (items, key, text) =>
  items.map((item) => {
    if (!(item[key] in text)) throw new Error(`Missing Arabic text for "${item[key]}" in content/ar/data.js`);
    return { ...item, ...text[item[key]] };
  });

// /ar/ is its own page, so every case-study link stays in Arabic.
const toArabicPath = (path) => (path ? `/ar${path}` : path);

export const nav = translate(en.nav, 'href', {
  '#home': { label: 'الرئيسية' },
  '#profile': { label: 'نبذة' },
  '#skills': { label: 'المهارات' },
  '#projects': { label: 'المشاريع' },
  '#experience': { label: 'الخبرات' },
  '#contact': { label: 'تواصل' },
});

export const social = translate(en.social, 'href', {
  'https://www.linkedin.com/in/ahmed-anan-285364273/': { label: 'أحمد عنان على LinkedIn', tooltip: 'LinkedIn' },
  'https://github.com/Ahmad-Anan': { label: 'أحمد عنان على GitHub', tooltip: 'GitHub' },
  'mailto:ahmed.anan.dev@gmail.com': { label: 'راسل أحمد عنان عبر البريد الإلكتروني', tooltip: 'البريد الإلكتروني' },
  'https://wa.me/201002416804': { label: 'راسل أحمد عنان على واتساب', tooltip: 'واتساب' },
});

export const skills = translate(en.skills, 'name', {
  'Angular': { note: 'بناء تطبيقات الصفحة الواحدة باستخدام Signals وzoneless change detection وSSR.' },
  'TypeScript': { note: 'خدمات ونماذج ومكوّنات محددة الأنواع، منظّمة وفق مبادئ SOLID.' },
  'JavaScript': { note: 'ES6+ الحديثة: الوحدات والفئات وasync/await.' },
  'jQuery': { note: 'التعامل مع DOM والأحداث والحركة.' },
  'TailwindCSS': { note: 'تنسيق قائم على utility classes مع design tokens مشتركة.' },
  'HTML5': { note: 'بنية دلالية تراعي سهولة الوصول.' },
  'CSS3': { note: 'تخطيطات متجاوبة باستخدام Grid وFlexbox، مع الانتقالات.' },
  'SASS': { note: 'متغيرات وmixins وملفات جزئية لتنظيم الأنماط.' },
  'PrimeNG': { note: 'بناء واجهات Angular من مكوّنات PrimeNG.' },
  'Bootstrap': { note: 'شبكة ومكوّنات متجاوبة.' },
  'NgBootstrap': { note: 'مكوّنات Bootstrap على هيئة directives أصلية في Angular.' },
  'Flowbite': { note: 'مكوّنات واجهة مبنية على Tailwind.' },
  'Figma': { note: 'تحويل تصميمات UI/UX إلى مكوّنات، وبناء نماذج أولية للتخطيطات.' },
  'Unit Testing (Jasmine)': { name: 'اختبارات الوحدات (Jasmine)', note: 'اختبار مكوّنات Angular وخدماتها باستخدام Jasmine.' },
  'Git & GitHub': { note: 'الفروع وطلبات الدمج وسجل الإصدارات.' },
});

export const projects = translate(en.projects, 'source', {
  'https://github.com/Ahmad-Anan/kingmart': {
    title: 'كينج مارت — متجر إلكتروني فاخر',
    description: 'متجر إلكتروني متكامل بـ Angular 22 مع Signals وzoneless change detection وOnPush افتراضيًا، مبني على نظام تصميم خاص بطابع «الفخامة الهادئة»، مع وضع داكن مصمَّم خصيصًا ودعم كامل للعربية والإنجليزية من اليمين إلى اليسار. يتضمن خدمات للسلة وقائمة الأمنيات قائمة على Signals، وحراسة مسارات آمنة مع SSR، ودفعًا عبر Stripe، وعدّاد كمية مخصّصًا.',
  },
  'https://github.com/Ahmad-Anan/tawasol': {
    title: 'تواصل — منصة تواصل اجتماعي',
    description: 'منصة تواصل اجتماعي على غرار LinkedIn بنيتها بالكامل بـ Angular 22 مع Zoneless وSignals وSSR. تشمل: تسجيل الدخول، وموجز بتمرير لا نهائي وفلاتر، وملفات شخصية، وتعليقات متشعّبة بالإعجابات والردود، ومحفوظات، وشارات إشعارات حيّة، كلها متصلة بواجهات REST حقيقية. نظام ألوان موحّد من design tokens، مدقَّق لتباين WCAG AA في الوضعين الفاتح والداكن.',
    caseStudy: toArabicPath(en.projects.find((p) => p.source.endsWith('/tawasol')).caseStudy),
  },
});

export const earlierWork = translate(en.earlierWork, 'source', {
  'https://github.com/Ahmad-Anan/Yummy': { summary: 'متصفح وصفات طعام على TheMealDB API: بحث، وتصنيفات، ومطابخ، ومكوّنات.' },
  'https://github.com/Ahmad-Anan/Game': { summary: 'كتالوج ألعاب مجانية مبني بفئات ووحدات ES6.' },
});

export const experience = translate(en.experience, 'place', {
  'Freelance team': {
    title: 'مطوّر واجهات أمامية',
    place: 'فريق عمل حر',
    period: 'أبريل 2025 – حتى الآن',
    description: 'بناء واجهات متجاوبة بـ Angular وTailwind CSS، وربط واجهات REST، وتصميم مكوّنات قابلة لإعادة الاستخدام مع فريق صغير من المستقلين.',
  },
  'Web Master': {
    title: 'تدريب في تطوير الواجهات الأمامية',
    place: 'Web Master',
    period: 'فبراير 2025 – أبريل 2025',
    description: 'بناء مشاريع واقعية بـ HTML وCSS وJavaScript مع التركيز على التصميم المتجاوب، تحت إشراف وتوجيه.',
  },
  'Code Alpha': {
    title: 'تدريب في تطوير الواجهات الأمامية',
    place: 'Code Alpha',
    period: 'نوفمبر 2024 – يناير 2025',
    description: 'بناء واجهات ويب متجاوبة وسهلة الاستخدام بـ HTML وCSS وJavaScript.',
  },
});

export const education = translate(en.education, 'place', {
  'Route Academy': {
    title: 'تطوير الواجهات الأمامية (مسار Angular)',
    place: 'Route Academy',
    period: 'يونيو 2024 – فبراير 2025',
    description: 'بناء تطبيقات Angular باستخدام TypeScript وJavaScript وTailwind CSS من خلال دراسة قائمة على المشاريع.',
  },
  'Al-Azhar University': {
    title: 'بكالوريوس إدارة الأعمال',
    place: 'جامعة الأزهر',
    period: 'سبتمبر 2019 – مايو 2023',
    description: 'اكتساب مهارات في الإدارة الاستراتيجية وحل المشكلات وتحليل البيانات.',
  },
});
