/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          light: "#d4d4d8",
          extraLight: "#a1a1aa",
          DEFAULT: "#71717a",
          dark: "#52525b",
          extraDark: "#3f3f46",
        },
        primary: {
          light: "#93c5fd",
          extraLight: "#60a5fa",
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
          extraDark: "#1d4ed8",
        },
        secondary: {
          light: "#d8b4fe",
          extraLight: "#c084fc",
          DEFAULT: "#a855f7",
          dark: "#9333ea",
          extraDark: "#7e22ce",
        },
        success: {
          light: "#86efac",
          extraLight: "#4ade80",
          DEFAULT: "#22c55e",
          dark: "#16a34a",
          extraDark: "#15803d",
        },
        warning: {
          light: "#fcd34d",
          extraLight: "#fbbf24",
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          extraDark: "#b45309",
        },
        danger: {
          light: "#fca5a5",
          extraLight: "#f87171",
          DEFAULT: "#ef4444",
          dark: "#dc2626",
          extraDark: "#b91c1c",
        },
      },
    },
  },
  plugins: [],
};
