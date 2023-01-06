/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          tomato: '#E50914',
          marigold: '#ffbe0b',
        },
        backgroundColor: {
          mainColor: '#FBF8F9',
          secondaryColor: '#F0F0F0',
          blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        },
      },
    plugins: [],
  }
}