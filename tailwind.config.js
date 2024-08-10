/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home_black: "#1A1A1A",
        button_blue: "#0E80BF",
        button_purple: "#6B40E3",
        border_gray: "#BCBCBC",
        input_text: "#00000099",
        resume_orange: "#F93B1D",
        resume_black: "#1A1A1A",
        line_bg_black: "#C8C8C8",
        validation_black: "#2E2E2E",
      },
      fontFamily: {
        myFont: ["myFont", "sans-serif"],
      },
      backgroundImage: {
        background: "url('/images/background.png')",
        "gradient-overlay":
          "linear-gradient(rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.52))",
        "input-background": "url('/images/correct.svg')",
        errorImage: "url(`images/errorImage.svg`)",
      },
      boxShadow: {
        custom: "0px 4px 28px 0px #00000040",
      },
    },
  },
  plugins: [],
};
