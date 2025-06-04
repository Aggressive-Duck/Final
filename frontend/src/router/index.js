import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard for authentication


export default router