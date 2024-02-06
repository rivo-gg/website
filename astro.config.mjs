import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://rivo.gg',
  integrations: [react(), tailwind(), sitemap(), compress({
    CSS: true,
    HTML: true,
    Image: true,
    JavaScript: false,
    SVG: true,
  })]
});