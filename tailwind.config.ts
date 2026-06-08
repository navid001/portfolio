import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{mdx}",
  ],
  darkMode: ["class", ".dark"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "'Courier New'", "monospace"],
      },
      colors: {
        background: "var(--bg)",
        foreground: "var(--ink)",
        ink: "var(--ink)",
        quiet: "var(--quiet)",
        accent: "var(--accent)",
        surface: "var(--surface)",
        hairline: "var(--hairline)",
        border: "var(--hairline)",
        input: "var(--surface)",
        ring: "var(--accent)",
        primary: {
          DEFAULT: "var(--accent)",
          foreground: "var(--bg)",
        },
        muted: {
          DEFAULT: "var(--surface)",
          foreground: "var(--quiet)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "var(--surface)",
          foreground: "var(--ink)",
        },
        popover: {
          DEFAULT: "var(--surface)",
          foreground: "var(--ink)",
        },
        secondary: {
          DEFAULT: "var(--surface)",
          foreground: "var(--ink)",
        },
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
        full: "9999px",
      },
      maxWidth: {
        prose: "720px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--ink)",
            maxWidth: "720px",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
