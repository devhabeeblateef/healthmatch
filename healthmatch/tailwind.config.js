/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('/homepage.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}