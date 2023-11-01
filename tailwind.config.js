/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        yellow: {
          primary: "#EAB73E",
        },
      },
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      animation: {
        slideInTop: "slideInTop 500ms ease-in-out",
      },
      keyframes: {
        slideInTop: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "50%": {
            transform: "translateY(5px)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
