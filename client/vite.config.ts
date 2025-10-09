import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 8080,
    fs: {
      // ✅ only allow THIS folder, not nested /client/client
      allow: [path.resolve(__dirname, ".")],
    },
  },
  build: {
    outDir: "dist", // default build output
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"), // lets you use "@/components/..."
    },
  },
});
