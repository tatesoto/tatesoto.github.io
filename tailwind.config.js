/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(51 65 85)', // slate-700
            a: { textDecoration: 'underline' },
          },
        },
        invert: {
          css: {
            color: 'rgb(203 213 225)', // slate-300
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}