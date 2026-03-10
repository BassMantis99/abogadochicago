import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "navy-deep": "#0C172A",
        navy: "#162949",
        "navy-light": "#1E3560",
        blue: "#26477F",
        "blue-light": "#2D5496",
        orange: {
          DEFAULT: "#F57547",
          hover: "#E0623A",
          light: "rgba(245,117,71,0.12)",
        },
        "off-white": "#F8F9FC",
        cream: "#FAF9F6",
        "gray-light": "#E5E8EE",
        "text-dark": "#0A112D",
        "text-body": "#3A4255",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-raleway)", "sans-serif"],
        body: ["var(--font-roboto-flex)", "sans-serif"],
      },
      fontSize: {
        h1: [
          "3.25rem",
          {
            lineHeight: "1.08",
            fontWeight: "800",
            letterSpacing: "-0.02em",
          },
        ],
        h2: ["2.375rem", { lineHeight: "1.15", fontWeight: "800" }],
        h3: ["1.125rem", { lineHeight: "1.4", fontWeight: "700" }],
        label: [
          "0.8125rem",
          { lineHeight: "1", fontWeight: "700", letterSpacing: "0.1em" },
        ],
      },
      borderRadius: {
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "16px",
        "2xl": "20px",
        pill: "100px",
      },
      boxShadow: {
        sm: "0 2px 12px rgba(22,41,73,0.04)",
        md: "0 8px 32px rgba(0,0,0,0.15)",
        lg: "0 12px 32px rgba(22,41,73,0.1)",
        xl: "0 20px 60px rgba(0,0,0,0.3)",
        cta: "0 4px 24px rgba(245,117,71,0.35)",
        badge: "0 4px 16px rgba(245,117,71,0.4)",
      },
      spacing: {
        18: "4.5rem",
        25: "6.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
