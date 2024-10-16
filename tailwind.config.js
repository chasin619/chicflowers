const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        ...defaultTheme.screens,
      },

      fontFamily: {
        sans: "Nunito Sans",
        italiana: "Italiana",
        qwitcher: "Qwitcher Grypen",
        mont: "Montserrat",
      },
    },
  },
  plugins: [],
};
