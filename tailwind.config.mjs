import { join } from 'path';
export default {
  content: [join('.', 'src', '**', '*.{astro,html,js,jsx,ts,tsx,vue,svelte}')],
  theme: {
    extend: {
      colors: {
        primary: '#F2C94C',
        secondary: '#42210B'
      }
    }
  },
  plugins: [],
};
