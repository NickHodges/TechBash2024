import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'http://localhost:4321',
  integrations: [sitemap(), db()],
  experimental: {
    actions: true
  }
});