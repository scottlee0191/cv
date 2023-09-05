/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: 'var(--border)',
        background: 'var(--bg)',
        text: 'var(--text)',
        second: 'var(--second)',
        main: 'var(--main)',
      },
      animation: {
        show: 'show 2s forwards',
      },
      keyframes: {
        show: {
          '0%,30%': { opacity: 0, transform: 'rotate(-20deg)' },
          '100%': { opacity: 1, transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
