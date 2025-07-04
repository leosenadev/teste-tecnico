
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './views/App.vue'
import router from './router/FilmeRoute.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
