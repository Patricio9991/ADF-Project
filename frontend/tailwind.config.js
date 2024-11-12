/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'340px',
    },
    extend: {
      
      fontFamily: {
        times: ['"Times New Roman"', 'Times', 'serif'],
        cincel: ["Cinzel", 'cincel', 'serif'],

      },
      gradientColorStopPositions: {
        13: '13%',
      }
      
    },
  },
  plugins: [],
}