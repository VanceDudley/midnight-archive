import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  // allows vite access to ./posts
  server: {
    allowedHosts: [
      "coder.zoeissleeping.xyz",
      "pleasing-osprey-specially.ngrok-free.app",
    ],
    fs: {
      allow: ['./']
    }
  }
})
