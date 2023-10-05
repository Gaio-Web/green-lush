/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lush-green': '#3a5a40',
        'lush-green-scnd': '#3a5a40',
        'lush-black': '#1b1b1b',
        'lush-beige': '#E3D5CA',
        'lush-beige-scnd': '#D5BDAF',
      },
      textColor: {
        'lush-green': '#3a5a40',
        'lush-black': '#1b1b1b',
        'lush-beige': '#E3D5CA',
        'lush-beige-scnd': '#D5BDAF',
      }
    },
  },
  plugins: [],
});
