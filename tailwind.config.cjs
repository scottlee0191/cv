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
    },
  },
  plugins: [],
}
