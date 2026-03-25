/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // ← NEW syntax for Next.js 16
    autoprefixer: {},
  },
}
