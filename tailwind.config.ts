import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Material Design 3 Tokens for Architecture Theme
        primary: "#2C3E35",         
        primaryContainer: "#D4E6D9", 
        surface: "#FAFAFA",         
        surfaceVariant: "#EFEFEF",  
        onSurface: "#1A1C1E",       
        onSurfaceVariant: "#53575A",
        outline: "#73777F",         
      },
      fontFamily: {
        // Connecting the Google Fonts variables from layout.tsx
        sans: ["var(--font-hanken)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-courier)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;