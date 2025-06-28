module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#081b29',
        'light-blue': '#00abf0',
        'darker-blue': '#05111d',
        'lighter-blue': '#33bbff'
      },
    },
  },
  plugins: [],
}