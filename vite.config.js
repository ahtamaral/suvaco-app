import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 3001,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    cors: {
      origin: ["https://www.suvacodocristo.com", "https://www.suvacodocristo.com.br"],
      credentials: true,
    },
    clientPort: 443,
  },
  plugins: [react()],
})

