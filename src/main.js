import { createApp } from 'vue';
import App from './App.vue';
import TheHeader from '@components/TheHeader';
import router from './router/router';

const app = createApp(App);

app.component('TheHeader', TheHeader);
app.use(router);
app.mount('#app');