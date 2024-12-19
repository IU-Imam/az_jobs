/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30':'70% 28%',
      }
    },
  },
  plugins: [],
}

