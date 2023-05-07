/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blackTransparent: 'rgb(26, 32, 44, .9)',
        whiteTransparent: 'rgb(252, 255, 247, .9)',
        gray: '#1A202C',
        darkgreen: '#046865',
        green: '#21A0A0',
        orange: '#FFC700',
        red: '#E53D00',
        black: '#151515',
        white: '#FCFFF7'
      },
      keyframes: {
        opacity: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        opacity_reverse: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        }
      },
      animation: {
        opacity: 'opacity .5s ease-in-out',
        opacity_reverse: 'opacity_reverse .5s ease-in-out'
      }
    }
  },
  plugins: []
};
