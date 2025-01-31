/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    screens: {
      mobile: "250px",

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    colors: {
      primary: "#1DA1F2", // Global primary color
      secondary: "#14171A", // Global secondary color
      accent: "#FAF7FC", // Example accent color
      light: "#dce9f7", // Light theme color
      dark: "#657786", // Dark theme color
      lightGreen: "#89f0c0",
      darkGreen: "#21cc6b",
      lightBlue: "#5cbcf7",
      darkBlue: "#2988FF",
      lightgrey: "#FFFFFF",
      darkGray: "#A9A9A9",
      darkRed: "#f56475",
      lightRed: "#f5c1c7",
      lightPink: "#f59aea",
      lightRedBtn: "#f55164",
      darkRedBtn: "#f0374d",
    },
  },
  plugins: [],
};
