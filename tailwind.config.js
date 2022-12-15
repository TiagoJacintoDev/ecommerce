/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0093D7",
        "accent-light": "#FF8800",
        "light-blue": "#00ABDF",
        "dark-blue": "#251B37",
        "dark-blue-lighten": "#372948",
        "light-gray": "#F5F5F5",
        "dark-gray": "#272723",
        "favorite-red": "#F44336",
        "review-yellow": "#F2C200",
      },
      screens: {
        xs: { min: "400px", max: "640px" },
        XSmax: { max: "400px" },
      },
      animation: {
        rotate: "rotate 5s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        strong: "rgba(6, 24, 44, 0.4) 0px 0px 0px 1.5px",
      },
    },
  },
  plugins: [],
};
