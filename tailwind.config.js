/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f0f1a',
        surface: '#1a1a2e',
        accent: '#6c63ff',
        cyan: '#00d4ff',
        textPrimary: '#e2e8f0',
        textMuted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

