/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'roboto-slab, ui-serif', // Adds a new `font-display` class
        poppins: 'poppins, ui-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [require("daisyui")],
}
