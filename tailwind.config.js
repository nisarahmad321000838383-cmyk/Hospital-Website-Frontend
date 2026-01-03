/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#93c5fd', // Blue-300 - Primary color
        secondary: '#60a5fa', // Blue-400 - Secondary color
        background: '#f0f9ff', // Very light blue background
      },
    },
    screens: {
      xs: '331px',
      sm: '480px',
      md: '768px',
      lg: '1124px',
      xl: '1440px',
    },
  },
  plugins: [],
};
