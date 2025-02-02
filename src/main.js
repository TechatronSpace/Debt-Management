import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap' 

createApp(App).use(store).use(bootstrap).use(router).mount('#app')

