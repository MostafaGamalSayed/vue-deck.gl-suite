import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import dtsPlugin from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue() as PluginOption,
    dtsPlugin({
      entryRoot: './src',
      insertTypesEntry: true, // Ensure types are included in "exports" in package.json
      tsconfigPath: './tsconfig.app.json', // Point explicitly to the correct tsconfig
      rollupTypes: true,      // Use rollup to bundle declaration files
      outDir: 'dist',      // Place all declarations in the "dist" folder
    }) as PluginOption,
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
      name: 'VueDeckGLSuiteMapLibre',
      fileName: (format) => `vue-deckgl-suite-maplibre.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        '@deck.gl/core',
        '@deck.gl/mapbox',
        'maplibre-gl'
      ],
      output: {
        globals: {
          vue: 'Vue',
          "maplibre-gl": "maplibregl"
        }
      }
    }
  }

})
