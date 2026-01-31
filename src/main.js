import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createI18n } from "vue-i18n";

import App from './App.vue'
import HomePage from './views/HomePage.vue'

import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/fonts.css";
import "./styles/styles.css";
import "./styles/properties.css";


import ru from "./locales/ru.json";
import en from "./locales/en.json";

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages: { ru, en },
});

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
