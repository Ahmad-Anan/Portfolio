// Checks that every internal URL in the built site resolves to a file in dist/: href, src and
// srcset in each page, the canonical/hreflang/og:image URLs (absolute, on the site's own origin),
// url() in the CSS, and every URL in sitemap.xml. Same-page and cross-page #fragments must match an id.
// Run `npm run build && npm run check-links`; it exits 1 on any miss.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const files = readdirSync(dist, { recursive: true }).map((file) => file.replaceAll('\\', '/'));
const pages = files.filter((file) => file.endsWith('.html'));
if (!pages.length) throw new Error('No pages in dist/. Run `npm run build` first.');

const read = (file) => readFileSync(join(dist, file), 'utf8');
// The production origin, taken from the home page's canonical link.
const site = read('index.html').match(/<link rel="canonical" href="([^"]+)"/)[1].replace(/\/$/, '');

/** Maps a URL path to the file Vercel would serve for it (a folder serves its index.html). */
const fileFor = (path) => {
  const file = join(dist, decodeURIComponent(path));
  if (existsSync(file) && statSync(file).isDirectory()) return existsSync(join(file, 'index.html')) ? join(file, 'index.html') : null;
  return existsSync(file) ? file : null;
};

const misses = [];
let checked = 0;

/** Checks one URL found in `source`; relative URLs resolve against `base` (the source's own URL). */
const check = (url, source, base) => {
  if (!url || /^(mailto|tel|javascript|data):/i.test(url)) return;
  const target = new URL(url, site + base);
  if (target.origin !== site) return; // external
  // Vercel injects this script at deploy time; it doesn't exist in dist/.
  if (target.pathname.startsWith('/_vercel/')) return;
  checked++;
  const file = fileFor(target.pathname);
  if (!file) return misses.push(`${source}: ${url}`);
  const id = decodeURIComponent(target.hash.slice(1));
  if (id && file.endsWith('.html') && !readFileSync(file, 'utf8').includes(`id="${id}"`)) misses.push(`${source}: ${url} (no element with id="${id}")`);
};

for (const page of pages) {
  const html = read(page);
  const base = '/' + page.replace(/(^|\/)index\.html$/, '$1');
  for (const [, attr, value] of html.matchAll(/\s(href|src|srcset|content)="([^"]*)"/g)) {
    if (attr === 'srcset') value.split(',').forEach((candidate) => check(candidate.trim().split(/\s+/)[0], page, base));
    else if (attr === 'content') { if (value.startsWith(site)) check(value, page, base); } // og:image, og:url, twitter:image
    else check(value, page, base);
  }
}

for (const css of files.filter((file) => file.endsWith('.css'))) {
  for (const [, url] of read(css).matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) check(url, css, '/' + css);
}

for (const [, url] of read('sitemap.xml').matchAll(/(?:<loc>|href=")([^<"]+)/g)) check(url, 'sitemap.xml', '/');

console.log(`${checked} internal URLs checked in ${pages.length} pages, the CSS and sitemap.xml: ${misses.length} broken.`);
misses.forEach((miss) => console.error(`  ${miss}`));
process.exitCode = misses.length ? 1 : 0;
