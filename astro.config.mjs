import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://127.0.0.1:4321',
  integrations: [sitemap(), db()]
});