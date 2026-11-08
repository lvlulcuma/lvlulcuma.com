// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { callouts, codeBlocks, sideNotes } from "./src/lib/markdown.mjs";

export default defineConfig({
  site: "https://lvlulcuma.com",
  trailingSlash: "always",
  build: {
    format: "directory",
    // Always keep CSS in separate files: the Content Security Policy (public/_headers) only allows
    // stylesheets loaded from this site, not CSS written inside the page.
    inlineStylesheets: "never",
  },
  vite: {
    build: {
      // Never paste small files (fonts, icons) into the CSS as text ("data:" addresses), for the same reason.
      assetsInlineLimit: 0,
    },
  },
  markdown: {
    // Colourful code highlighting would put style="" on every word, which the Content Security Policy
    // blocks, so code blocks stay plain.
    syntaxHighlight: false,
    // Small additions to Markdown: "> [!WARNING]" boxes, "> [!ASIDE]" margin notes and code blocks with
    // a caption bar (see src/lib/markdown.mjs).
    processor: satteri({ hastPlugins: [callouts, sideNotes, codeBlocks] }),
  },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", pl: "pl", ua: "uk" } },
      // lvlulcuma.com/ itself only redirects to /en/ (public/_redirects), so search engines don't need it.
      filter: (page) => page !== "https://lvlulcuma.com/",
    }),
  ],
});
