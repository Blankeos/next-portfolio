import { colorVars } from './src/styles/themes';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{mdx,}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: `rgb(var(${colorVars.primary400}) / <alpha-value>)`,
          500: `rgb(var(${colorVars.primary500}) / <alpha-value>)`,
          600: `rgb(var(${colorVars.primary600}) / <alpha-value>)`,
        },
        secondary: {
          500: `rgb(var(${colorVars.secondary500}) / <alpha-value>)`,
        },
        typography: {
          300: `rgb(var(${colorVars.typography300}) / <alpha-value>)`,
          400: `rgb(var(${colorVars.typography400}) / <alpha-value>)`,
          500: `rgb(var(${colorVars.typography500}) / <alpha-value>)`,
        },
        background: `rgb(var(${colorVars.background}) / <alpha-value>)`,
      },
      fontSize: {
        xxs: [
          '0.65rem',
          {
            lineHeight: '1rem',
          },
        ],
      },
      maxWidth: {
        '8xl': '100rem',
        '9xl': '110rem',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      width: ['hover', 'group-hover'],
      height: ['hover', 'group-hover'],
      rotate: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
