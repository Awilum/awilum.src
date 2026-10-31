import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/lib/site.ts';
import { SITE_OUTPUT_DIR } from './src/lib/build-output.ts';

export default defineConfig({
  site: SITE.url,
  output: 'static',
  devToolbar: { enabled: false },
  outDir: SITE_OUTPUT_DIR,
  build: { format: 'directory', emptyOutDir: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});