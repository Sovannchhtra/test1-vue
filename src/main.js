import { createApp } from 'vue';
import ToastService from 'primevue/toastservice';

import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import '/node_modules/primeflex/primeflex.css';
// import 'primeflex/themes/primeone-light.css';
// import 'primeflex/themes/primeone-dark.css';

const app = createApp(App);
app.use(ToastService);
app.use(PrimeVue)
app.mount('#app')