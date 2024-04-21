/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-seri"],
      serif: ["Rancho", "cursive"],
    },
    extend: {
      backgroundImage: {
        "navbar-background": "url('/src/assets/navbar-bg.jpg')",
        "hero-background": "url('/src/assets/hero-bg.png')",
      },
      colors: {
        primary: "#E3B577",
        dark: "#242222",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["winter"],
  },
};
