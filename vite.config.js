import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { renderPartials } from './content/render.js';

// Every page is built: the home page plus one case study per projects/<slug>/index.html.
const caseStudyPages = Object.fromEntries(
  readdirSync('projects').map((slug) => [slug, resolve('projects', slug, 'index.html')]),
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: { main: resolve('index.html'), ...caseStudyPages },
    },
  },
  plugins: [
    {
      name: 'render-partials',
      transformIndexHtml: { order: 'pre', handler: renderPartials },
    },
  ],
});
