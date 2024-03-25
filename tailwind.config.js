/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        darkBackground: '#141414',
        inputDark: '#2c2c2c',
        buttonDark: '#443dc7',
        buttonDarkHover: '#5b4cff'
      }
    },
  },
  plugins: [],
}