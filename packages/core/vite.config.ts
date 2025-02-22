import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import dtsPlugin from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dtsPlugin({
      entryRoot: './src',
      insertTypesEntry: true, // Ensure types are included in "exports" in package.json
      tsconfigPath: './tsconfig.app.json', // Point explicitly to the correct tsconfig
      rollupTypes: true,      // Use rollup to bundle declaration files
      outDir: 'dist',      // Place all declarations in the "dist" folder
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    sourcemap: false,
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
        exports: "named",
        globals: {
          vue: 'Vue',
          '@deck.gl/core': 'deck',
          '@deck.gl/layers': 'deck.layers'
        },
      },
    }
  }
})
