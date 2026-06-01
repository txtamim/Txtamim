import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // TypeScript এরর এড়াতে 'as any' কাস্টিং করা হলো
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]], 
      },
    } as any),
  ],
})
