import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/lo_imaginas-portafolio/', // LÍNEA ES LA CLAVE
  server: {
    host: true,
    port: 5173
  }
})
