/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#0f171e',
        'secondary-color':'#1a242f',
        'font-primary':'#ffffff',
        'font-secondary':'#79b8f3'
      },
      gridTemplateColumns:{
        'aFill':'repeat(auto-fill,minmax(220px,1fr))'
      }
    },
  },
  plugins: [],
}