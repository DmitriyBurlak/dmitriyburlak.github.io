import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

// const app = createApp(App)
// app.mount('#app');

createApp(App)
.use(router)
.use(store)
.mount('#app');