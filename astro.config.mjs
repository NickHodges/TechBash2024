import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import node from "@astrojs/node";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'http://localhost:4321',
  integrations: [sitemap(), db(), react(), mdx()],
  experimental: {
    serverIslands: true,
  },
  adapter: node({
    mode: "standalone"
  })
});