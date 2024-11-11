import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/3D-Portfolio/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000, // Adjust the limit as needed
  },
})
