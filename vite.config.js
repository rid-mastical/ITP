import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/mind-matrix-api': {
        target: 'https://api.mind-matrix.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mind-matrix-api/, '')
      }
    }
  }
})
