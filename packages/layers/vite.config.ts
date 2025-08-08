import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
// import dtsPlugin from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue() as PluginOption,
    vueDevTools() as PluginOption,
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
      name: 'VueDeckGLSuiteLayers',
      // Dynamically include format in the file name
      fileName: (format) => `vue-deckgl-suite-layers.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        '@deck.gl/core',
        '@deck.gl/layers',
        '@deck.gl/geo-layers',
        '@deck.gl/aggregation-layers'
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@deck.gl/core': 'deck',
          '@deck.gl/layers': 'deck.layers',
          '@deck.gl/geo-layers': 'deck.geo-layers',
          '@deck.gl/aggregation-layers': 'deck.aggregation-layers',
        },
      },
    }
  }
})
