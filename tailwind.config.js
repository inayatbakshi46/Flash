/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Cabin", "sans-serif"] 
      }
    },
  },
  plugins: [require("daisyui")],

daisyui: {
    themes: ["bumblebee", "dim"]
  },
  

}