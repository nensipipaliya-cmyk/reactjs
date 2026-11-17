<<<<<<< HEAD
import React from '@vitejs/plugin-react'
=======
import react from '@vitejs/plugin-react'
>>>>>>> 4f99a56a66948f36bc18f28e512e739bc7111582
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [ tailwindcss(),React() ],
=======
  plugins: [react(),
    tailwindcss(),],
    darkMode:"class",
>>>>>>> 4f99a56a66948f36bc18f28e512e739bc7111582
})
