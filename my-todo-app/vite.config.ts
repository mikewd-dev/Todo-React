import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [
      "a0a1397c-219d-48a5-9b71-4b45d9ae102f-00-3kd4t1wodgi0k.picard.replit.dev",
    ],
  },
});