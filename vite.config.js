import { defineConfig } from 'vite';

import { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    open: false
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        visor: resolve(__dirname, 'visor.html')
      }
    }
  }
});
