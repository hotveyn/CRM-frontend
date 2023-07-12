import {createApp} from 'vue'
import App from './App.vue'
import {router} from "@/router/router.ts";
import naive from 'naive-ui'
import {createPinia} from "pinia";

createApp(App).use(router).use(naive).use(createPinia()).mount('#app')

