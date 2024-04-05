/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1400px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        1200: { max: '1200' },
        1360: { max: '1360px' },
      },
      colors: {
        default: '#fff',
        primary: '#ED8B33',
        blue: '#192157',
        discover: '#333333',
      },
    },
  },
  plugins: [],
}
