import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server :{
    allowedHosts:["5173-harishshanmugam2005-cms-79tvwyr32n.app.codeanywhere.com"]
  },
  plugins: [react()],
})
