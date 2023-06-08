/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '17': '17deg',
        '360':'360deg'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      borderRadius:{
        '50':'50px'
      },
      boxShadow: {
        'contact-btn': '5px 5px rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}

