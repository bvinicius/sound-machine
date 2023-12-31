import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import App from '@/primary/App.vue';
import PhosphorIcons from '@phosphor-icons/vue';

import '@/primary/index.css';

const app = createApp(App);

const pinia = createPinia();
pinia.use(createPersistedState());

app.use(pinia);
app.use(PhosphorIcons);

app.mount('#app');
