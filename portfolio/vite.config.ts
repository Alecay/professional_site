import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/alecay.github.io/"
  css:
  {
    modules:
    {
      scopeBehaviour: 'local'
    }
  }
})
