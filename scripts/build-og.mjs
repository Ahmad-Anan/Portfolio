// Renders the 1200x630 Open Graph images in public/og/ with headless Chromium, using the
// site's own fonts and colors. Run with `npm run og` after changing a title or tagline.
import { chromium } from 'playwright';
import { existsSync, readFileSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../public/', import.meta.url);
const types = { woff2: 'font/woff2', webp: 'image/webp' };
// Inlined as data URIs: the card is set as page content, which can't load file:// URLs.
// A file that doesn't exist (e.g. the Arabic font on an English-only build) becomes an empty URL.
const asset = (path) => {
  const file = fileURLToPath(new URL(path, root));
  if (!existsSync(file)) return '';
  return `data:${types[path.split('.').pop()]};base64,${readFileSync(file).toString('base64')}`;
};

const cards = [
  {
    file: 'home-en.png',
    eyebrow: 'Portfolio',
    title: 'Ahmed Maged Anan',
    subtitle: 'Frontend Developer, Angular',
    line: 'I build fast, accessible Angular apps, with Signals, SSR, and full Arabic/English RTL.',
  },
  {
    file: 'home-ar.png',
    lang: 'ar',
    dir: 'rtl',
    eyebrow: 'البورتفوليو',
    title: 'أحمد ماجد عنان',
    subtitle: 'مطوّر واجهات أمامية، متخصص في Angular',
    line: 'أبني تطبيقات Angular سريعة وسهلة الوصول، باستخدام Signals وSSR ودعم كامل للعربية والإنجليزية من اليمين إلى اليسار.',
  },
  {
    file: 'tawasol.png',
    eyebrow: 'Case study',
    title: 'Tawasol',
    subtitle: 'Angular 22 · Signals · SSR · Arabic/English RTL',
    line: 'A LinkedIn-style social app in English and Arabic.',
    shot: 'projects/tawasol/feed-en-light.webp',
  },
  {
    file: 'kingmart.png',
    eyebrow: 'Case study',
    title: 'KingMart',
    subtitle: 'Angular 22 · PrimeNG · Stripe · Arabic/English RTL',
    line: 'A luxury e-commerce store with a “quiet luxury” design system.',
  },
];

const escape = (text) => text.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

const page = ({ eyebrow, title, subtitle, line, shot, dir = 'ltr', lang = 'en' }) => `<!doctype html>
<html lang="${lang}" dir="${dir}">
<meta charset="utf-8">
<style>
  @font-face { font-family: "Space Grotesk"; font-weight: 700; src: url("${asset('fonts/space-grotesk-latin-700-normal.woff2')}"); }
  @font-face { font-family: "IBM Plex Sans"; font-weight: 400; src: url("${asset('fonts/ibm-plex-sans-latin-400-normal.woff2')}"); }
  @font-face { font-family: "IBM Plex Mono"; font-weight: 500; src: url("${asset('fonts/ibm-plex-mono-latin-500-normal.woff2')}"); }
  @font-face { font-family: "IBM Plex Sans Arabic"; font-weight: 400; src: url("${asset('fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2')}"); }
  @font-face { font-family: "IBM Plex Sans Arabic"; font-weight: 700; src: url("${asset('fonts/ibm-plex-sans-arabic-arabic-700-normal.woff2')}"); }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: #0E1013; color: #ECEBE7;
    font-family: "IBM Plex Sans", "IBM Plex Sans Arabic", sans-serif;
  }
  .frame { position: absolute; inset: 40px; border: 1px solid #26292E; border-radius: 6px; }
  .copy { position: absolute; inset-block: 96px 96px; inset-inline-start: 96px; width: ${shot ? 560 : 1000}px; display: flex; flex-direction: column; }
  .eyebrow, .subtitle { font-family: "IBM Plex Mono", "IBM Plex Sans Arabic", monospace; font-weight: 500; text-transform: uppercase; color: #8A8E94; }
  .eyebrow { font-size: 22px; letter-spacing: 0.16em; }
  h1 { font-family: "Space Grotesk", "IBM Plex Sans Arabic", sans-serif; font-weight: 700; font-size: ${shot ? 96 : 104}px; line-height: 1.05; letter-spacing: -0.02em; margin-top: 28px; }
  .subtitle { font-size: 22px; letter-spacing: 0.12em; color: #ECEBE7; margin-top: 28px; }
  .line { font-size: 30px; line-height: 1.4; color: #8A8E94; margin-top: auto; }
  .bar { position: absolute; inset-inline-start: 96px; bottom: 72px; width: 120px; height: 4px; border-radius: 1px; background: #3E63E0; }
  .shot { position: absolute; top: 120px; inset-inline-start: 700px; width: 720px; border: 1px solid #26292E; border-radius: 6px; }
  :lang(ar) .eyebrow, :lang(ar) .subtitle, :lang(ar) h1 { letter-spacing: normal; font-family: "IBM Plex Sans Arabic", "IBM Plex Sans", sans-serif; }
  :lang(ar) h1 { line-height: 1.3; }
</style>
<div class="frame"></div>
${shot ? `<img class="shot" src="${asset(shot)}" alt="">` : ''}
<div class="copy">
  <p class="eyebrow">${escape(eyebrow)}</p>
  <h1>${escape(title)}</h1>
  <p class="subtitle">${escape(subtitle)}</p>
  <p class="line">${escape(line)}</p>
</div>
<div class="bar"></div>
</html>`;

await mkdir(new URL('og/', root), { recursive: true });
const browser = await chromium.launch();
try {
  const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const card of cards) {
    await tab.setContent(page(card), { waitUntil: 'load' });
    await tab.evaluate(() => document.fonts.ready);
    const out = fileURLToPath(new URL(`og/${card.file}`, root));
    await tab.screenshot({ path: out });
    console.log(`Wrote ${out}`);
  }
} finally {
  await browser.close();
}
