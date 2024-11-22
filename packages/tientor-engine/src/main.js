import './assets/tailwind.css'
import './assets/reset.css'
import './assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import ArcoVue from "@arco-design/web-vue";
import '@arco-design/web-vue/dist/arco.css';

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'

import {useConfigStore} from "@/stores/config.js";
import TientorVue from "@tientor/tientor-component";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)

const {ui} = useConfigStore()
app.use(TientorVue, {
    ui
})

app.mount('#app')
