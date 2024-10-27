/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'light-shadow': '0 0 10px rgba(0, 0, 0, 0.09)',
        'dark-shadow': '0 0 10px rgba(255, 255, 255, 0.05)'
      },
      colors: {
        lightBackground: '#f9f9f9',
        lightForeground: '#ffffff',
        darkBackground: '#1E1E1E',
        darkForeground: '#0F0F0F',
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

