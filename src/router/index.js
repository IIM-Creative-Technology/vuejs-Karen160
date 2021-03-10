import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: admin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
