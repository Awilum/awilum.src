import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  site: "https://awilum.ru",
  compressHTML: true,
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: "prism"
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap()]
});