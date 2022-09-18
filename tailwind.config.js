/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lg-black': '#141416',
        'md-black': '#1f1f22',
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
