import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        primary: 'var(--color-primary)',
        hint: '#9ca3af', // gray-400
      },
    },
    // @see https://tailwindcss.com/docs/container#centering-by-default,
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
      screens: {
        sm: '1020px',
        // sm: '600px',
        // md: '728px',
        // lg: '984px',
        // xl: '1240px',
        // '2xl': '1496px',
      },
    },
  },
  plugins: [],
}
export default config
