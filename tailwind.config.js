/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-pattern': "url('./src/assets/images/banner.jpg')" 
      }
    },
  },
  plugins: [],
}