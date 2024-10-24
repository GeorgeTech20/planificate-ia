/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1600px",
        },
        padding: "1em",
      },
      screens: {
        tablet: { max: "1024px" },
        mobile: { max: "560px" },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        grotesk: ["Overused Grotesk", "sans-serif"]
      },
      fontSize: {
        "2xl": "clamp(42px, 8vw, 90px)",
        "xl": "clamp(36px, 8vw, 60px)",
        lg : "clamp(20px, 3vw, 24px)",
        base: "clamp(16px, 3vw, 20px)"
      },
      colors: {
        primary: "#E1FFB8",
        secondary: "#2F4858",
        gray: "#636363",
        "dark-gray": "#272727",
        "pale-gray": "#E4E4E4"

      },
      backgroundImage: {
        hero: "url('/public/hero.png')"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
