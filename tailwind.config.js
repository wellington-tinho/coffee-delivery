/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'base-white': '#FFFFFF',
        'base-background': '#FAFAFA',
        'base-card': '#F3F2F2',
        'base-input': '#EDEDED',
        'base-button': '#E6E5E5',
        'base-hover': '#D7D5D5',
        'base-label': '#8D8686',
        'base-text': '#574F4D',
        'base-subtitle': '#403937',
        'base-title': '#272221',
        'brand-purple-dark': '#4B2995',
        'brand-purple': '#8047F8',
        'brand-purple-light': '#EBE5F9',
        'brand-yellow-dark': '#C47F17',
        'brand-yellow': '#DBAC2C',
        'brand-yellow-light': '#F1E9C9',
      },
    },
    plugins: [
      plugin(function ({ addVariant }) {
        addVariant('third', '&:nth-child(3)')
      }),
    ],
  },
}
