const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nav-bg": "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
      },
      fontFamily: {
        adam: ['"playfair display"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
