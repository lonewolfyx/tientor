import './assets/tailwind.css'
import './assets/reset.css'
import './assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)


app.mount('#app')
