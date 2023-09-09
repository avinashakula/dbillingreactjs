import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@src":"/src",
      "@utilities":"/src/utilities",
      "@store":"/src/store",
      "@components":"/src/components",
      "@navbar":"/src/navbar"
    }
  }
})
