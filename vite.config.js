import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { renderPartials } from './content/render.js';

// Every page is built: each language's home page plus one case study per projects/<slug>/index.html.
const pagesUnder = (root, prefix) => {
  const projects = resolve(root, 'projects');
  return {
    [`${prefix}main`]: resolve(root, 'index.html'),
    ...Object.fromEntries(
      (existsSync(projects) ? readdirSync(projects) : []).map((slug) => [
        `${prefix}${slug}`,
        resolve(projects, slug, 'index.html'),
      ]),
    ),
  };
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: { ...pagesUnder('.', ''), ...pagesUnder('ar', 'ar-'), notFound: resolve('404.html') },
    },
  },
  plugins: [
    {
      name: 'render-partials',
      transformIndexHtml: { order: 'pre', handler: renderPartials },
    },
  ],
});
