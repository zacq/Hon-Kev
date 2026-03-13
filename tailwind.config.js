/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#15803D',
          dark: '#064E3B',
          light: '#DCFCE7',
        },
        neutral: {
          gray: '#F3F4F6',
          dark: '#0F172A',
        }
      }
    },
  },
  plugins: [],
}
