const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)',
      },
      colors: {
        'secondary-grey-300': '#F4F7FE',
        'secondary-grey-500': '#E0E5F2',
        'secondary-grey-600': '#A3AED0',
        'secondary-grey-700': '#2B3674',
        'primary-blue-100': '#EFF4FB',
        'primary-blue-200': '#B0BBD5',
        'primary-blue-500': '#4318FF',
        'primary-main-text': '#2B3674',
        'primary-link-text': '#707EAE',
        'secondary-green': '#05CD99',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
