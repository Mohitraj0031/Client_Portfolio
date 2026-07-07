/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
      'slide-in-left': {
            '0%': { visibility: 'visible', transform: 'translate3d(-100%, 0, 0)' },
            '100%': { transform: 'translate3d(0, 0, 0)' },
          },
      'slide-in-right': {
            '0%': { visibility: 'visible', transform: 'translate3d(100%, 0, 0)' },
            '100%': { transform: 'translate3d(0, 0, 0)' },
          },
      'zoom-in': {
            '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
            '80%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 1, transform: 'scale3d(1, 1, 1)' },
          },
      'fade-in': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
      'fade-in-up': {
            '0%': { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
            '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          },
    },
      animation: {
        slideinright: 'slide-in-right 3s ease-in-out',
        slideinleft: 'slide-in-left 7s ease-in-out',
        zoomin: 'zoom-in 10s ease-in-out ',
        fadein: 'fade-in 10s ease-in-out',
        fadeinup: 'fade-in-up 9s ease-in-out',
        
      },
        
    },
  },
  plugins: [],
}

