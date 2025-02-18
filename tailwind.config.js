/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green:{
          "custom": "rgb(34, 204, 12)",
          "mid":"#38972E"
        },
        blue:{
          "custom":"#192A56"
        }
    },
    }
  },
  plugins: [],
}