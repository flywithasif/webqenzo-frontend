/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        webqenzo: {
          blue: "#2563EB",
          navy: "#0B1220",
          deep: "#060B14",
          cyan: "#06B6D4",
          background: "#F7F8FA",
          white: "#FFFFFF",
          text: "#111827",
          muted: "#667085",
        },
      },
    },
  },

  plugins: [],
};