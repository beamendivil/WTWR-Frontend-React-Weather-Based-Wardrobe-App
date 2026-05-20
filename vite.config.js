import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base:
    command === "build"
      ? "/WTWR-Frontend-React-Weather-Based-Wardrobe-App/"
      : "/",
}));
