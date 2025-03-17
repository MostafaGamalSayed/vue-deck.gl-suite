import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router/index.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
