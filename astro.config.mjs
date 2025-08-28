import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://basola.example',
  integrations: [tailwind()],
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
});
