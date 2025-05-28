import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server :{
    allowedHosts:["5173-harishshanmugam2005-cms-79tvwyr32n.app.codeanywhere.com"]
  },
  plugins: [react()],
})
