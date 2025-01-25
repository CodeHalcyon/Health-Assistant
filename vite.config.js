import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,  // Frontend port
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // Backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
