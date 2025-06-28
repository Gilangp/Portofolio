// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a86ff', // Warna utama
        dark: '#121212',   // Untuk dark mode
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Font custom
      },
    },
  },
  plugins: [],
}