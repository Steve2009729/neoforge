import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        card: '#1A1A2E',
        'gradient-dark': '#0D0D14',
        violet: {
          base: '#7C3AED',
          dark: '#0D0D14',
          card: '#1A1A2E',
          border: '#2D2D4A',
        },
      },
      backgroundColor: {
        'bg-primary': '#0D0D14',
        'bg-secondary': '#1A1A2E',
        'bg-tertiary': '#252541',
      },
      borderColor: {
        primary: '#2D2D47',
      },
      textColor: {
        primary: '#F5F3FF',
        secondary: '#D1D5DB',
        tertiary: '#9CA3AF',
      },
    },
  },
  plugins: [],
};
export default config;
