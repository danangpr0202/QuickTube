/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B8D9',
          hover: '#00a3c0'
        },
        accent: {
          DEFAULT: '#FF6F00',
          hover: '#e66400'
        },
        dark: {
          DEFAULT: '#333333',
          secondary: '#000000'
        }
      }
    },
  },
  plugins: [],
} 