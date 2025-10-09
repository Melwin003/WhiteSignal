/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./App.tsx",
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          // Builder.io brand palette
          "brand-dark": "#11201d",
          "brand-olive": "#565449",
          "brand-bone": "#d8cfbc",
          "brand-cream": "#fffbf4",
        },
      },
    },
    plugins: [],
  };
  