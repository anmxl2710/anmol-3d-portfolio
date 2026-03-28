import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/anmol-3d-portfolio/" : "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("@react-three/rapier")) return "rapier";
          if (id.includes("@react-three/postprocessing")) return "r3f-post";
          if (id.includes("three")) return "three";
        },
      },
    },
  },
}));
