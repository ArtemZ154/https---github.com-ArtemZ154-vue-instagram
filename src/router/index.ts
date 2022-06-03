import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '@/views/main_i.vue'
import Login from '@/views/login_i.vue'
import personalPage from '@/views/personal_page.vue'
import regPf from '@/views/reg_i.vue'
import settingPage from '@/views/setting_i.vue'
import razrabPage from '@/views/razraboka_i.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/page-not-found',
    name: 'razrabPage',
    component: razrabPage
  },
  {
    path: '/',
    name: 'main_i',
    component: Main
  },
  {
    path: '/login',
    name: 'login_i',
    component: Login
  },
  {
    path: '/account/:username',
    name: 'personal_Page',
    component: personalPage
  },
  {
    path: '/registration',
    name: 'reg_i',
    component: regPf
  },
  {
    path: '/settings',
    name: 'settingPage',
    component: settingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
