import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage.vue'
import "./styles/reset.css";

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
  .mount('#app')
