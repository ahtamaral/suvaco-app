import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    cors: {
      origin: ["https://www.suvacodocristo.com", "https://www.suvacodocristo.com.br", "museu-virtual-suvaco-7db1ebfa088f.herokuapp.com"],
      credentials: true,
    },
    clientPort: 443,
  },
  preview: {
    allowedHosts: ["www.suvacodocristo.com", "www.suvacodocristo.com.br", "museu-virtual-suvaco-7db1ebfa088f.herokuapp.com"]
  },
  plugins: [react()],
})