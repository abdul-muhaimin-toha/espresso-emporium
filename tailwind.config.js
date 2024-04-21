/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-seri"],
      serif: ["Rancho", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["winter"],
  },
};
