/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      colors: {
        primary: "#7c3aed",
        secondary: "#0f172a",
        dark: "#020617",
        accent: "#06b6d4",
      },
    },
  },

  plugins: [],
}