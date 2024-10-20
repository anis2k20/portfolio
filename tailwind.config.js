/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 28px 0 rgba(0, 0, 0, 0.09)',
      },
      colors: {
        lightBackground: '#f9f9f9',
        lightForeground: '#ffffff',
        dark:'#212121',
        primary: '#2857FC'
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

