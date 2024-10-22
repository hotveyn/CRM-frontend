import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@/router/router.ts';
import { createPinia } from 'pinia';
import './assets/css/_globals.scss';
import './assets/css/reset.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

const app = createApp(App);

app.use(router).use(createPinia()).mount('#app');
