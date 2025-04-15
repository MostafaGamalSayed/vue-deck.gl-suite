import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __GOOGLE_MAPS_KEY__: JSON.stringify(env),
    },
    plugins: [
      vue() as PluginOption,
      vueDevTools() as PluginOption,
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
