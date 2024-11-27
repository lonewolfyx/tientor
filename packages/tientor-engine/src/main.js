import './assets/tailwind.css'
import './assets/reset.css'
import './assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ArcoVue from "@arco-design/web-vue";
import '@arco-design/web-vue/dist/arco.css';

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import TientorFormWrapper from "@tientor/tientor-component/form-wrapper/index.js";
import TientorFormItem from "@tientor/tientor-component/form-item/index.js";

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(ArcoVue)

// 注册表单
app.component('TientorFormWrapper', TientorFormWrapper)
app.component('TientorFormItem', TientorFormItem)


app.mount('#app')
