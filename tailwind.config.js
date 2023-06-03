//set the default theme
const defaultTheme = require('tailwindcss/defaultTheme')

//import tw-element module
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Libre", ...defaultTheme.fontFamily.sans],
          },
      },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};