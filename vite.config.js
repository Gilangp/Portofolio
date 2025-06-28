import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Untuk deploy di root domain
  build: {
    outDir: 'dist', // Folder build output
    emptyOutDir: true // Bersihkan folder dist sebelum build
  }
})