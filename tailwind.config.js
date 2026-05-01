/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a0a0a',
        surface: '#141414',
        accent: '#e2e2e2',
        cyan: '#9ca3af',
        textPrimary: '#f5f5f5',
        textMuted: '#737373',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

