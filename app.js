import { createApp } from 'vue'
import Counter from './Counter.vue'
import store from './store'
import { createPinia } from 'pinia'

const app = createApp(Counter)

app.use(store)
app.use(createPinia())

app.mount('#app')
