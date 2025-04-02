import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import '@/assets/style.scss';
import LazyLoad from "@/directives/lazyLoad";

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.error("Error:", err);
  console.error("Vue component:", vm);
  console.error("Additional info:", info);
};

app.use(createPinia()).directive("lazy", LazyLoad).use(router).mount('#app');