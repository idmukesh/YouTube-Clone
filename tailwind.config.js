/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],  
        Barlow:["Barlow Condensed", 'sans-serif'],
      },
      colors: {
        'dark-gray': '#0f0f0f',
      },
      animation: {
        fadeOut: 'fadeOut 1s forwards', // 1 second fadeOut animation
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}