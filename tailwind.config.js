/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: ["class"],
  purge: ["./components//.js", "./pages//.js"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "nav-border": "#EBEAEA",
        section1Button: "#bd5a81",
        section1Lable: "#fceaf6",
        section2Button: "#efb39d",
        section2Label: "#fcf0eb",
        customBlue: "#fef3ef",
        primary1: "#fcefff",
        card3: "#efeefe",
        card4: "#eefef1",
        "plenti-black": "#818080",
        "gray-100": "#3d3d4e",
        "black-100": "#252525",
        primary: "#EA1C24",
        secondary: "#fff4f9",
        "bg-dark": "#3E1F2A",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
