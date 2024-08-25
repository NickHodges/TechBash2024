import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import node from "@astrojs/node";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'http://localhost:4321',
  integrations: [sitemap(), db(), react(), mdx(), auth()],
  experimental: {
    actions: true,
    serverIslands: true
  },
  adapter: node({
    mode: "standalone"
  })
});