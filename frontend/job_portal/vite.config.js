import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Force Vite to use esbuild instead of lightningcss
    cssMinify: 'esbuild'
  },
})