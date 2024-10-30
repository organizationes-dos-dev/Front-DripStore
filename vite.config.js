import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {API_BASE_URL: '"https://db-dripstore.onrender.com"'},
  plugins: [react()],
})
