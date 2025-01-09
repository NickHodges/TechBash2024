import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import node from "@astrojs/node";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'http://localhost:4321',
  integrations: [sitemap(), db(), react(), mdx()],
  adapter: node({
    mode: "standalone"
  }),
  env: {
    schema: {
      ASTRO_DB_REMOTE_URL: envField.string({ context: "server", access: "secret", optional: true }),
      ASTRO_DB_APP_TOKEN: envField.string({ context: "server", access: "secret", optional: true }),
    },
    validateSecrets: true,
  },
});