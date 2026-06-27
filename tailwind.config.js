/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#06000f",
        electric: "#00d2ff",
        accent: "#7000ff",
      },
    },
  },
  plugins: [],
}
