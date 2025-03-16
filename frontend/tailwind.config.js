/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003092",  // Blue
        secondary: "#00879E",  // Teal
        accent: "#FFAB5B",  // Orange
        light: "#FFF2DB",  // Light cream
      },
    },
  },
  plugins: [],
}
