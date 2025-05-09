/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '1020px',
        'custom-xl': '1210px',
      },
    },
  },
  plugins: [],

  
}

