/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: { DEFAULT: '#008000', dark: '#006400', light: '#F0FFF0' },
        neutral: { gray: '#F7FFF7', dark: '#0F2E0F' },
        dcp: {
          white:   '#FFFFFF',
          bg:      '#F0FFF0',
          soft:    '#F7FFF7',
          bright:  '#00FF00',
          green:   '#008000',
          dark:    '#006400',
          pale:    '#90EE90',
          surface: '#E8FCE8',
          text:    '#0F2E0F',
          sub:     '#2F4F2F',
          muted:   '#5E7A5E',
        },
      },
    },
  },
  plugins: [],
}
