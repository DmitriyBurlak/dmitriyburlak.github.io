import { createApp } from 'vue';
// import store  from './stores'

import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue';
import router from './router';

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');