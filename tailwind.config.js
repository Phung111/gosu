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
        // primary: '#f53d2d',
        primary: '#a8242d',
        primary_dark: '#63161B',
        secondary: '#5ed1c9',
        secondary_dark: '#40AEA7',
        neutral: '#fff',
        color1: '#a8242d',
        color2: '#ffffff',
        color3: '#ececec',
        color1_dark: '#63161B',
        red: '#f53d2d',
        red2: '#d00000',
        gray: '#f5f4f4',
        gray2: '#ededed',
        gray3: '#fafafa',
        gray4: '#fbfbfb',
      },
    },
  },
  plugins: [],
}
