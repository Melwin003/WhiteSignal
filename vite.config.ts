import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/WhiteSignal/", // Important for GitHub Pages

  plugins: [react()],
  
  build: {
    outDir: "dist", // gh-pages expects this folder
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
