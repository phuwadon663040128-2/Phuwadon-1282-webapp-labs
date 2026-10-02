import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: {
        problem1: fileURLToPath(new URL('./index.html', import.meta.url)),
        problem3: fileURLToPath(new URL('./prob3/index.html', import.meta.url)),
      },
    },
  },
})
