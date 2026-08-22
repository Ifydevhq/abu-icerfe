import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Institutional green, taken from the ICERFE mark. Used for structure,
        // not decoration — headers, rules, primary actions.
        brand: {
          50: '#F1F7F3',
          100: '#DDEBE3',
          200: '#BBD7C8',
          300: '#8FBBA5',
          400: '#5D9A7D',
          500: '#3A7D5D',
          600: '#26644A',
          700: '#1B4F3B',
          800: '#143D2E',
          900: '#0E2C22',
        },
        // The gold from the mark. Hairlines and small marks only.
        gold: {
          400: '#D4B25C',
          500: '#B78B2E',
          600: '#94701F',
        },
        ink: {
          DEFAULT: '#12171A',
          muted: '#4A5559',
          faint: '#7A868B',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F8F7',
          edge: '#E6E9E7',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        display: ['clamp(2rem, 3.6vw, 3rem)', { lineHeight: '1.14', letterSpacing: '-0.015em' }],
        title: ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.22', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,23,26,0.04), 0 8px 24px -12px rgba(18,23,26,0.10)',
        lift: '0 2px 4px rgba(18,23,26,0.05), 0 18px 40px -18px rgba(18,23,26,0.18)',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
