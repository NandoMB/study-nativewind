/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#fff',
        dark: '#212529',
        primary: {
          50: '#82aaff',
          100: '#6193ff',
          200: '#417dff',
          300: '#2067ff',
          400: '#004fff',
          500: '#064de6',
          600: '#0b48ce',
          700: '#0f44b7',
          800: '#113fa1',
          900: '#13398b',
        },
        secondary: {
          50: '#ffdc82',
          100: '#ffd261',
          200: '#ffc941',
          300: '#ffc020',
          400: '#ffb800',
          500: '#e6a606',
          600: '#ce970b',
          700: '#b7870f',
          800: '#a17811',
          900: '#8b6913'
        },
        tertiary: {
          50: '#e3ffec',
          100: '#c5fdd6',
          200: '#a8f9c1',
          300: '#8cf4ad',
          400: '#70f299',
          500: '#61ec8d',
          600: '#55e582',
          700: '#49dd78',
          800: '#3fd46e',
          900: '#36ca65'
        }
      }
    },
  },
  plugins: [],
}
