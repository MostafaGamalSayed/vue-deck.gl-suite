import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      // Simplified library global name
      name: 'VueDeckGLSuiteCore',
      // Dynamically include format in the file name
      fileName: (format) => `vue-deckgl-suite-core.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        '@deck.gl/core',
        '@deck.gl/layers'
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@deck.gl/core': 'deck',
          '@deck.gl/layers': 'deck.layers'
        },
      },
    }
  }
})
