/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/Header.jsx",
    "./components/Search.jsx",
    "./components/List.jsx",
    "./App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlue": "hsl(209, 23%, 22%)",
        "veryDarkBlueBg": "hsl(207, 26%, 17%)",
        "veryDarkBlueTx": "hsl(200, 15%, 8%)",
        "darkGray": "hsl(0, 0%, 52%)",
        "veryLightGray": "hsl(0, 0%, 98%)",
        "veryWhite":  "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

