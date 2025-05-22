import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [
      "7a6f73ee-d54d-47b6-aabf-fb8bff0b7ab0-00-3rqjno6ohyscf.riker.replit.dev",
    ],
  },
  build: {
    outDir: 'dist', // Move it here
  },
});