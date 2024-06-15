import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)'],
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
