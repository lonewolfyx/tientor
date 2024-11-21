import './assets/tailwind.css'
import './assets/reset.css'
import './assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import TientorVue from '@tientor/tientor-component'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import {useConfigStore} from "@/stores/config.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

const {ui} = useConfigStore()
app.use(TientorVue, ui)

app.mount('#app')
