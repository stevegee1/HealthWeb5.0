import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#1B1B1B',
      primary: '#0D1A92',
      bgGray: '#F7F8FA',
      typeGray: '#747F86',
      borderLine: '#DEE2E9',
      deepBlue: '#0D1A92',
      skyBlue: '#CDE2F18A',
      errorBg: '#ffebee',
      error: '#e57373',
      modalGrey: 'rgba(0, 0, 0, 0.5);',
      progressGreen: '#2D8331'
    },
    extend: {
      fontFamily: {
        book: ['var(--groteskBook20)'],
        groteskM: ['var(--groteskMedium20)'],
        groteskSB: ['var(--groteskSemiBold20)'],
        uber: ['var(--uberMoveMedium)']
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '55px',
        '7xl': '65px'
      }
    }
  },
  plugins: []
};
export default config;
