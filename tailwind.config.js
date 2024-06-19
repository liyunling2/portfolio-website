/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "theme-g1": {
        900: "#46ec5f",
        700: "#46ec5f85"
      },
      "theme-g2": "#02a015",
      "theme-b1": "#0B1010",
      "theme-b2": "#02070A",
      "theme-w": "#fffce1",
      },
      fontFamily: {
        poppins : ["Poppins", "sans-serif"],
        archivo : ["Archivo", "sans-serif"]
      },
      container: {
        padding: {
          DEFAULT: '2rem',
          sm: '3rem',
          lg: '4rem',
          xl: '10rem',
          '2xl': '12rem'
        }
      },
      display: ["group-hover"],
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    }
  },
  plugins: [],
}


// #03131b
// #030c10