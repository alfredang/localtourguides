/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sky-blue travel palette: soothing blues with warm sunset accents
        cream: '#F5FAFD', // ice-sky page background
        sand: '#DCEAF3', // soft blue-grey borders / dividers
        terra: {
          DEFAULT: '#0284C7', // primary sky blue (CTAs, links)
          dark: '#0369A1',
        },
        sunset: '#F59E0B', // warm accent (stars, featured)
        ink: '#12344D', // deep ocean navy (text, footer)
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
