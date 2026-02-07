/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#EEF1FE',
          100: '#DDE4FD',
          200: '#BCC9FB',
          300: '#92A7F5',
          400: '#6B85F0',
          500: '#4361EE',
          600: '#3450D4',
          700: '#2A40AF',
          800: '#24368D',
          900: '#202D72',
          950: '#151D49',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}