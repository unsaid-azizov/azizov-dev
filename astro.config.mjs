// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://azizov.dev',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
  },

  integrations: [react(), sitemap()],
});