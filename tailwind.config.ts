import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9B111E",
        secondary: "#2F3430",
        accent: "#C9A227",
        background: "#F8FAFC",
        ink: "#17201B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 70px -42px rgba(23, 32, 27, 0.42)",
        lift: "0 30px 80px -44px rgba(155, 17, 30, 0.38)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
