import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        slateNight: "#060816",
        slatePanel: "#0d1328",
        blueGlow: "#3a7bff",
        violetGlow: "#8f5dff"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(58,123,255,0.22)",
        violet: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(143,93,255,0.18)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(255,255,255,0.14) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
