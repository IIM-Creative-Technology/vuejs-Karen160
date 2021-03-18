import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'



App.config.devtools = true

createApp(App).use(router).use(store).mount('#app')
