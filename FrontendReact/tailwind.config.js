/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    boxShadow: {
      'littlebit': '0px 5px 10px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      colors: {
        'navbarActive': '#2DBFC5',
        'darkGray': '#33363F',
        'white' : '#FFFFFF',
        'lightGray' : '#F5F5F5',
        'Gray' : '#9E9E9E'
      },
    },
  },
  plugins: [],
}

