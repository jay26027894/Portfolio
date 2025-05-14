/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // important!
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF0B55',   // example primary color
        secondary: '#06b6d4', // example secondary color
      },
    },
  },
  plugins: [],
};


