/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Light mode colors
      blue: "#0079FF",
      gray: "#697C9A",
      "muted-blue": "#4B6A9B",
      zinc: "#2B3442",
      "pale-white": "#F6F8FF",
      "almost-white": "#FEFEFE",

      // Dark mode colors
      white: "#FFFFFF",
      black: "#141D2F",
      "dark-blue": "#1E2A47",
    },
    fontSize: {
      h1: ["26px", { lineHeight: "38px" }],
      h2: ["22px", { lineHeight: "33px" }],
      h3: ["16px", { lineHeight: "24px" }],
      h4: ["13px", { lineHeight: "20px" }],
      body: ["15px", { lineHeight: "25px" }],
    },
    extend: {
      fontFamily: { "space-mono": ['"Space Mono"', "monospace"] },
      screens: { desktop: "1440px" },
    },
  },
  plugins: [],
  darkMode: "selector",
};
