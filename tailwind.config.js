/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
      },
      fontFamily: {
        sans: ['Inter', 'Calibre', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        'heading-1': 'clamp(40px, 8vw, 80px)',
        'heading-2': 'clamp(30px, 5vw, 60px)',
        'heading-3': 'clamp(24px, 4vw, 32px)',
        'xl': '20px',
        'lg': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-in-out',
        'pulse-green': 'pulseGreen 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(100, 255, 218, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(100, 255, 218, 0)' },
        },
      },
    },
  },
  plugins: [],
} 