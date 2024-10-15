import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/alecarpy24/proyectos-fct/tree/main/react-rick-and-morty",
  plugins: [react()],
})
