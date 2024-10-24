import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
    host: true,  // Adicione uma vírgula aqui
  },
  plugins: [react()],  // Certifique-se de que os plugins estão fora do bloco `server`
})
