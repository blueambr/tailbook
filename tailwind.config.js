/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/components/**/*.{pug,js,ts}", "./src/js/**/*.{js,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", ...defaultTheme.fontFamily.sans],
        serif: ["Times New Roman", "Georgia", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
