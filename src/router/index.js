import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Admin from '../views/Admin.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import Modify from '../components/modify.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store/index.js'

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,

      children: [
        {
          path: 'modify/:id',
          component : Modify,
        }
      ],
      beforeEnter: (to, from, next) => {
        if(store.state.token == null) {
          next("/login");
        } else {
          next();
        }
      }
  },
  {
    path: '/addpost',
    name: 'AddPost',
    component: AddPost,
    beforeEnter: (to, from, next) => {
      if(store.state.token == null) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/blog/:id/:title',
    name: 'Post',
    component: Post,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(store.state.token != null) {
        next("/blog");
      } else {
        next();
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if(store.state.token != null) {
        next("/blog");
      } else {
        next();
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
