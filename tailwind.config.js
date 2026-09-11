/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#FBF8F5",
          secondary: "#F7F1EE",
          surface: "#FFFDFC",
        },
        rose: {
          50: "#F3E9EA",
          100: "#EADBDD",
          200: "#D8B9BF",
          300: "#D8B9BF",
          400: "#B66F7D",
          500: "#B66F7D",
          600: "#9E5C6B",
          700: "#9E5C6B",
          800: "#8C626B",
          900: "#8C626B",
        },
        charcoal: {
          DEFAULT: "#252529",
          50: "#FFFDFC",
          100: "#F7F1EE",
          200: "#E7DDD9",
          300: "#8C8C91",
          400: "#626268",
          500: "#252529",
          900: "#252529",
        },
        accent: {
          primary: "#B66F7D",
          dark: "#9E5C6B",
          soft: "#EADBDD",
          light: "#F3E9EA",
          border: "#D8B9BF",
        },
        blue: {
          50: "#F7F1EE",
          75: "#F3E9EA",
          100: "#FFFDFC",
          200: "#252529",
          300: "#B66F7D",
        },
        violet: {
          300: "#B66F7D",
        },
        yellow: {
          100: "#B38A62",
          300: "#B38A62",
        },
      },
    },
  },
  plugins: [],
};