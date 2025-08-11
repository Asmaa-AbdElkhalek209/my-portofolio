/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor: "#72b626",
        darkGray: "rgb(102, 102, 102)",
        lightGray: "rgb(239, 240, 240)",
        MediumGray: "#666",
      },
      fontFamily:{
         open: ['Open Sans', 'sans-serif'],
         Poppins:['Poppins', 'sans-serif'],
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

