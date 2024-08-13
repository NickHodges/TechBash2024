import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'http://localhost:4321',
  integrations: [sitemap()],
  experimental: {
    actions: true
  },
  adapter: node({
    mode: "standalone"
  })
});