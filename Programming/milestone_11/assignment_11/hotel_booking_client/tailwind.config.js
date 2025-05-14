/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif ",
        reenie: "'Reenie Beanie', cursive",
        roboto: "'Roboto', sans-serif",
        robotoslab: "'Roboto Slab', serif",
        belle: "'La Belle Aurore', cursive",
        marcellus: "'Marcellus', serif",
        jost: "'Jost', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#53624e",
          secondary: "#b99d75",
          accent: "#dc2625",
          neutral: "#343434",
          "base-100": "#ffffff",
        },
      },
      "light",
      "synthwave",
    ],
  },
};
