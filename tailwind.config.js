/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      dark_gray: "hsl(0, 0%, 55%)",
      very_dark_gray: "hsl(0, 0%, 41%)",
    },
    fontFamily: {
      Alata: ["Alata, sans-serif"],
      Josefin_Sans: ["Josefin Sans, sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
