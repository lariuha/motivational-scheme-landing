/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,jsx,ts,tsx,mdx}',
      './components/**/*.{js,jsx,ts,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          crimson: '#8D230F',
          forest: '#1E434C',
          rusty: '#9B4F0F',
          gold: '#C99E10',
          'light-bg': '#f8f8f8',
          'text-dark': '#333333',
        },
        fontFamily: {
          sans: ['var(--font-open-sans)'],
          heading: ['var(--font-montserrat)'],
        },
      },
    },
    plugins: [],
  };
  