/*tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{html,js}', // Ensure public files are included if needed
  ],
  darkMode: 'class',
  purge:[],
  theme :{
    center: true,
    padding: '1rem',
    screens: {
      sm: '400px',
      md: '700px',
      lg: '1100px',
      xl: '1400px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      backgrounddImage: {
        'desktop-light': 'url("/assets/bg-desktop-light.jpg")',
        'desktop-dark': 'url("/assets/bg-desktop-dark.jpg")',
        'mobile-light': 'url("/assets/bg-mobile-light.jpg")',
        'mobile-dark': 'url("/assets/bg-mobile-dark.jpg")',
      },
      transitionProperty: {
        background: 'background-color',
        color: 'color',
      },
      colors: {
        light: {
          DEFAULT: 'hsl(236, 33%, 92%)',
        },
        dark: {
          DEFAULT: 'hsl(235, 19%, 35%)',
        },
      },
      fontSize: {
        '18px': '18px',
        '14px': '14px',
      },
      width: {
        '90vw': '90vw',
      },
  
    },
  },
  plugins: [],
}; 