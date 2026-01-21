/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e96406",
        dark: "#0d2f54",
      },
    },
  },
  plugins: [],
}
