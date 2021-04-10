import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Index/Home.vue'
import store from '@/store'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Login'
        })
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters['auth/authenticated']){
        return next({
          name: 'Home'
        })
      }
      next()
    }
  },
  {
    path: '/chpwd',
    name: 'ChangePassword',
    component: () => import('../views/Auth/ChangePassword.vue'),
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'Login'
        })
      }
      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router