module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00ABBA',
        seconday: '#FF1493',
        remoteagro: {
          50: '#f0f8eb',
          100: '#e1f1d8',
          200: '#c3e3b0',
          300: '#a4d489',
          400: '#95cd75',
          500: '#86c661',
          600: '#68B83A',
          700: '#53932e',
          800: '#3e6e23',
          900: '#2a4a17',
          DEFAUlT: '#68B83A',
        },
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['odd', 'even'],
    },
  },
  plugins: [],
};
