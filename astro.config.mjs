import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://127.0.0.1:4321',
  integrations: [sitemap()],
  experimental: {
    actions: true
  },
  adapter: node({
    mode: "standalone"
  })
});