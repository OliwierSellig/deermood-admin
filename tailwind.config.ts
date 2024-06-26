import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1540px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '960px' },
      sm: { max: '620px' },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInPopup: {
          '0%': { opacity: '0', transform: 'translate(-50%, -47%)' },
          '100%': { opacity: '1', transform: 'translateY(-50%, -50%)' },
        },
      },

      animation: {
        'fade-in-fast': 'fadeIn 0.2s ease-in-out',
        'fade-in-medium': 'fadeIn 0.3s ease-in-out',
        'fade-in-long': 'fadeIn 0.4s ease-in-out',
        'fade-popup': 'fadeInPopup 0.3s ease-in-out',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)'],
      },
      boxShadow: {
        'login-page': '4px 0px 12px 0px rgba(153, 157, 165, 0.05);',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#fefefe',
          100: '#f6f6f6',
          150: '#ededef',
          200: '#e1e2e4',
          300: '#c8cace',
          400: '#999da5',
          500: '#707681',
          600: '#474f5d',
          700: '#323b4b',
          800: '#282f3c',
          900: '#1e232d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
