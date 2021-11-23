const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        "2xl": "996px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
