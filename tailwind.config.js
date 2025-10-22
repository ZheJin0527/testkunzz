/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'besley': ['Besley', 'serif'],
        'arial': ['Arial', 'sans-serif'],
      },
      colors: {
        'tokyo-gold': '#c8a068',
        'tokyo-gold-light': '#d4af6a',
        'tokyo-dark': '#2a2a2a',
        'tokyo-gray': '#f5f5f5',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'scroll': 'scroll 2s infinite',
        'fall': 'fall linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { opacity: '1', top: '6px' },
          '100%': { opacity: '0', top: '18px' }
        },
        fall: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.9' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      textOrientation: {
        'upright': 'upright',
      }
    },
  },
  plugins: [],
}
