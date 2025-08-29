module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F2C94C',
        secondary: '#42210B',
        basola: { brown: '#6A2D0F', yellow: '#FFB703' },
      },
      boxShadow: {
        glow: '0 0 0.75rem rgba(255,183,3,.45)',
      },
      transitionDuration: {
        1500: '1500ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
