import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  srcDir: 'src',
  site: 'https://basola.example',
  integrations: [mdx(), tailwind(), react()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
