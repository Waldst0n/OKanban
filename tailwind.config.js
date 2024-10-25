/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primaryColor: '#0060b9',
      secondaryColor: '#314c53',
      tertiaryColor: '#d0d4e4',
      boardColor: '#fafbff',
      white: '#fff',
      gray: '#dcdfec',
      black: '#eceff8',
      green: '#33d391',
      yellow: '#fdbc64',
      red: '#e8697d',
      grayNote: '#797e93',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
