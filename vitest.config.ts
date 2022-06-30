/* vitest.config.ts */

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
const path = require('path')

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    // Now I can import the test api's globally
    globals: true,
    environment: 'happy-dom',
  },
  root: '.',
  esbuild: {
    tsconfigRaw: '{}',
  },
  resolve: {
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [vue()]
})
