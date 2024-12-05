import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Creator',
    name: 'Creator',
    
    component: () => import('../views/Creator.vue')
  },
  {
    path: '/PG',
    name: 'PG',
    
    component: () => import('../views/PG.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
