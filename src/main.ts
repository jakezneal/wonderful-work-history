import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);

app.directive('test', {
    created(el, { arg }) {
        if (typeof process === 'undefined' || !process.env.VITEST) {
            return;
        }

        el.setAttribute('data-testid', arg);
    },
});

app.use(createPinia());

app.mount('#app');
