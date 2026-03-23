import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#e6b6c2",
          light: "#f5dce2",
          dark: "#8b4a65",
        },
        accent: {
          DEFAULT: "#b1dc94",
          light: "#d4f0bc",
          dark: "#6b9e4a",
        },
        surface: "#fce8ed",
        cream: "#ffffff",
        muted: "#6b7280",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-rose-green":
          "linear-gradient(135deg, #5a2e42 0%, #8b4a65 50%, #3d6a28 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
