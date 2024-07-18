import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { setupCalendar } from 'v-calendar';

const app = createApp(App);

app.use(createPinia());

app.use(setupCalendar, {});

app.mount('#app');
