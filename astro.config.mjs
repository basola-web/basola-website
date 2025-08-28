import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Basic Astro configuration
export default defineConfig({
  srcDir: 'src',
  site: 'https://basola.example',
  integrations: [tailwind()],
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
