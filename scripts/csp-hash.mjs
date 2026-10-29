// Prints the CSP sha256 hash of every inline script in the built pages (dist/), and checks that
// vercel.json's Content-Security-Policy allows each one. Run `npm run build && npm run csp-hash`
// after editing an inline <script> (today only the `window.va` snippet), then paste a new hash
// into script-src. JSON-LD blocks are data, not scripts, so CSP doesn't apply to them.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const pages = readdirSync(dist, { recursive: true }).filter((file) => file.endsWith('.html'));
if (!pages.length) throw new Error('No pages in dist/. Run `npm run build` first.');

const hashes = new Map();
for (const page of pages) {
  const html = readFileSync(join(dist, page), 'utf8');
  for (const [, attrs, body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\ssrc=/.test(attrs) || /type="application\/ld\+json"/.test(attrs)) continue;
    // Vercel builds from git, where every file has LF endings; CRLF here means a Windows checkout.
    if (body.includes('\r')) console.warn(`${page}: inline script has CRLF line endings, so its hash won't match the Vercel build.`);
    const hash = `'sha256-${createHash('sha256').update(body).digest('base64')}'`;
    hashes.set(hash, [...(hashes.get(hash) ?? []), page]);
  }
}

const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const csp = vercel.headers.flatMap((rule) => rule.headers).find((header) => header.key === 'Content-Security-Policy')?.value ?? '';

let missing = 0;
for (const [hash, files] of hashes) {
  const allowed = csp.includes(hash);
  if (!allowed) missing++;
  console.log(`${hash}  ${allowed ? 'in vercel.json' : 'MISSING from vercel.json'}  (${files.length} pages)`);
}
process.exitCode = missing ? 1 : 0;
