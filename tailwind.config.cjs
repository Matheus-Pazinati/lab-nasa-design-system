/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    backgroundImage: {
      linear: 'linear-gradient(89.7deg, rgba(15, 58, 151, 0.85) 0.27%, #1E1E1E 54.15%);',
    },

    colors: {

      transparent: 'transparent',

      black: '#000',
      white: 'FFF',

      gray: {
        900: '#121214',
        800: '#202024',
        300: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      blue: {
        500: '#0F3A97',
        300: '#2A51A4'
      }
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
