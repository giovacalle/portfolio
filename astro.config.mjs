import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://giova.dev',
  integrations: [tailwind(), solidJs(), sitemap()],
  trailingSlash: 'always' // so vercel doesn't complain :)
});
