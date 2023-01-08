/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        teal: { "100": "#359a8b", "200": "#325949" },
        gray: "#1e1e1e",
        beige: "#c9efc7",
        gold: "#b5cd4b",
        turquoise: "#83c6c6",
      },
      borderRadius: { base: "68px" },
    },
    fontSize: {},
  },
  corePlugins: { preflight: false },
};
