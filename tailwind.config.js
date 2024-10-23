const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
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
