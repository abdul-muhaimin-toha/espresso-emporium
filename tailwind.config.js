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
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["winter"],
  },
};
