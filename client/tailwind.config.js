/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  mode:'jit',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'green'
      }
    },
  },
  plugins: [],
}