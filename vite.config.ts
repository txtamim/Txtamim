import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwind v4 এর জন্য

export default defineConfig({
  plugins: [
    tailwindcss(), // ভালো পারফরম্যান্সের জন্য এটিকে উপরে রাখা ভালো
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]], 
      },
    }),
  ],
})
