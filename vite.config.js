import { defineConfig } from 'vite';
import { renderPartials } from './content/render.js';

export default defineConfig({
  plugins: [
    {
      name: 'render-partials',
      transformIndexHtml: { order: 'pre', handler: renderPartials },
    },
  ],
});
