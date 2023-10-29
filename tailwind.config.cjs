/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: '#1A202C',
        darkgreen: '#046865',
        green: '#21A0A0',
        orange: '#FFC700',
        pink: '#AC80A0', // Opera Mauve
        black: {
          DEFAULT: '#151515',
          rich: '#001011'
        },
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
