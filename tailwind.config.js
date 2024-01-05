/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        black: "#0F0F0F",
        "button-yellow": "#E9FF1A",
        "border-input": "#424242",
        "input-title": "#ECEDEE",
        "input-text": "#6D6D6D",
        biology: "rgba(204, 64, 144, 0.20)",
        art: "#05A2C2",
        geography: "rgba(194, 103, 25, 0.20)",
        sociology: "rgba(155, 25, 194, 0.20)",
      },
      fontFamily: {
        sans: "Montserrat, sans-serif",
      },
      width: {
        card: "9.8125rem",
        "button-modal": "8.125rem",
        modal: "24.75rem",
        "button-confirm": "8.375rem",
      },
      height: {
        card: "9.125rem",
        "button-modal": "3.3125rem",
        modal: "28.3125rem",
      },
      borderRadius: {
        "button-modal": "1.25rem",
        card: "20px",
      },
    },
  },
  plugins: [],
};
