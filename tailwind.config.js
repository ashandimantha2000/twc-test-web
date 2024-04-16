/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '480px',
        'h2': '36px',
        'h3': '30px',
        'h4': '24px',
        'h5': '20px',
        'h6': '16px',
      },
      backgroundImage: {
        'texture': "url('/src/assets/images/texture.png')",
        'backgountImage': "url('/src/assets/images/Background.png')",
        'Eclipse': "url('/src/assets/images/Ellipse.svg')",
      },
      colors: {
        'primary-green': '#083F46',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}