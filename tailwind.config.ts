import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const token = (name: string) => `hsl(var(--${name}))`;

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        // Titulares en Fraunces, siempre en mayúsculas.
        display: ["clamp(2.5rem, 1.4rem + 4.4vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.01em" }],
        heading: ["clamp(2rem, 1.35rem + 2.8vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        title: ["clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)", { lineHeight: "1.15" }],
        lead: ["clamp(1rem, 0.95rem + 0.25vw, 1.1875rem)", { lineHeight: "1.6" }],
      },
      colors: {
        // Paleta de marca.
        bordo: { DEFAULT: "#861F52", dark: "#5E1239" },
        aubergine: { DEFAULT: "#2B0F1F", 2: "#3D1A2D" },
        cream: "#FBF6F3",
        pink: { DEFAULT: "#F6DCE7", strong: "#F2A9C8" },
        ink: "#1E1418",
        line: "#EADCE2",
        "on-dark": "#E7CFDA",
        // Tokens semánticos (cambian dentro de .dark).
        background: token("background"),
        foreground: token("foreground"),
        card: { DEFAULT: token("card"), foreground: token("card-foreground") },
        popover: { DEFAULT: token("popover"), foreground: token("popover-foreground") },
        primary: { DEFAULT: token("primary"), foreground: token("primary-foreground") },
        secondary: { DEFAULT: token("secondary"), foreground: token("secondary-foreground") },
        muted: { DEFAULT: token("muted"), foreground: token("muted-foreground") },
        accent: { DEFAULT: token("accent"), foreground: token("accent-foreground") },
        destructive: { DEFAULT: token("destructive"), foreground: token("destructive-foreground") },
        "brand-text": token("brand-text"),
        cta: { DEFAULT: token("cta"), foreground: token("cta-foreground"), hover: token("cta-hover") },
        border: token("border"),
        input: token("input"),
        ring: token("ring"),
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
