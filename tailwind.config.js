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
