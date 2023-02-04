import './bootstrap';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia'
import i18n from '@/plugins/i18n';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(router);

app.mount("#app");
