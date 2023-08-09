/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
  './components/**/*.{html,js}',,
  "./src/**/*.{html,js}",
  "'*.{html,js}'"],
  theme: {
    fontFamily:{
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Bai Jamjuree', 'sans-serif']
    },
    extend: {
      colors:{
        clipboardcyan: '#26bba4'
      }
    },
  },
  plugins: [],
}

