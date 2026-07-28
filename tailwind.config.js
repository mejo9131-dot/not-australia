/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        hub: {
          bg: '#0a0c14',
          panel: '#12151f',
          panelDark: '#0c0e16',
          border: '#1f2937',
          borderLight: '#374151',
          gold: '#d4af37',
          goldLight: '#e8c547',
          goldDark: '#b8941d',
          teal: '#2dd4bf',
          tealLight: '#5eead4',
          blue: '#3b82f6',
          blueLight: '#60a5fa',
          purple: '#8b5cf6',
          purpleLight: '#a78bfa',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
        }
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.25)',
        'teal': '0 0 20px rgba(45, 212, 191, 0.15)',
        'purple': '0 0 20px rgba(139, 92, 246, 0.15)',
      }
    }
  },
  plugins: [],
}
