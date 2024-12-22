import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy: {
      '/api': {
        target: 'https://676874d5cbf3d7cefd37fc13.mockapi.io/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/, ''),
      }
    }
  },
})
