import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    include: ["react-paginate"],
  },
});
