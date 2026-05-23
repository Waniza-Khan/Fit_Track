/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["'Sora'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
