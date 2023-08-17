import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@/router/router.ts';
import { createPinia } from 'pinia';
import './assets/css/_globals.scss';
import './assets/css/reset.scss';

const app = createApp(App);

app.use(router).use(createPinia()).mount('#app');
