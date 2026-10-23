import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "full-reload",
      handleHotUpdate({ server }) {
        server.ws.send({ type: "full-reload", path: "/" });
        return [];
      },
    },
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
