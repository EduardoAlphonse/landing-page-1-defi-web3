/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#19c9ae',
          500: '#48e923',
          700: '#1b582a',
          800: '#07200a',
          900: '#031404',
        },
      },
    },
  },
  plugins: [],
};
