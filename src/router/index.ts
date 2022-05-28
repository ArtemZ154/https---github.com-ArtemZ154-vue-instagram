import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '@/views/main_i.vue'
import Login from '@/views/login_i.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main_i',
    component: Main
  },
  {
    path: '/login',
    name: 'login_i',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
