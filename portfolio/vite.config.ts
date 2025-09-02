import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/professional_site/" : "/",
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
}));
