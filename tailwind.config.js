/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.{js,jsx,ts,tsx,html}', './src/*.{js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        screens: {
          lg: "1400px",
        }
      },
      colors: {
        'orange': '#F8733C',
        'orangeLight': '#f8733cbd',
      },
      fontSize : {
        md : '17px',
      },
      backgroundImage: {
        'body-pattern' : "url('./img/bg-tablet-pattern.svg')",
        'cta-bg' : "url('./img/bg-simplify-section-desktop.svg')",
      },
      // backgroundPosition : {
      //   'top-end' : 'top right'
      // }
    },
  },
  plugins: [],
}
