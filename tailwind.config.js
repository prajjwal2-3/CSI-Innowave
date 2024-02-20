/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nav-bg":
          "background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
