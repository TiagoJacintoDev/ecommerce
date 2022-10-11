/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#F15A24',
        'dark-blue': '#251B37',
        'dark-blue-lighten': '#372948',
      },
    },
  },
  plugins: [],
};
