import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "system-ui", "sans-serif"],
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 50%, #111 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
