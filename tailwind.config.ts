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
        background: "#FAFAFA", // soft neutral background
        text: "#2E2E2E", // dark grey for body text
        accent: "#E85C0D", // warm orange brand tone
        accentDark: "#C24A09", // darker orange for hover
        sand: "#E4DDD5", // subtle beige divider
        graylight: "#B6B6B6", // light grey for secondary text
        white: "#FFFFFF", // white base
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
