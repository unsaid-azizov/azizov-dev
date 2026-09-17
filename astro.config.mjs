// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://azizovhq.com',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/services/private-ai-systems/': '/services/custom-ai-agent-development/',
    '/services/inbox-crm-automation/': '/services/custom-ai-agent-development/',
    '/services/lead-capture-estimating/': '/services/chatbots/',
    '/services/reactivation-follow-up/': '/services/chatbots/',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
  },

  integrations: [
    react(),
    sitemap(),
  ],
});
