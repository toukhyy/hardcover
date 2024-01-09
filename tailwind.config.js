/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silk: {
          50: '#ebe6e3',
          100: '#ddd6d0',
          200: '#cfc6bd',
          300: '#bbada1',
          400: '#a89c91',
          500: '#968a81',
          600: '#837971',
          700: '#706861',
          800: '#5e5751',
          900: '#4b4540',
          1000: '#383430',
          1100: '#252320',
        },
      },
    },
  },
  plugins: [],
};
