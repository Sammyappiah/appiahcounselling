import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F6", // soft warm white
        text: "#2E2E2E", // charcoal grey
        accent: "#4A5D73", // deep slate blue
        sand: "#D8C3A5", // dusty sand
        terracotta: "#B36A5E", // muted terracotta
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

