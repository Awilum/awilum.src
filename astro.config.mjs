import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import mdx from '@astrojs/mdx';
import vue from "@astrojs/vue";

export default defineConfig({
  outDir: "./dist",
  site: "https://awilum.ru",
  compressHTML: true,
  build: {
    format: "directory"
  },
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: "prism"
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), 
  sitemap({
    serialize(item) {
      if (item.url.includes(`/articles/1/`)) {
        return undefined;
      }
      return item;
    },
  }),
  pagefind(), mdx(), vue({ jsx: true })]
});