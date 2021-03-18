import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Admin from '../views/Admin.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import Modify from '../components/modify.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

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
      ]
  },
  {
    path: '/addpost',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: Post,
    // meta: {
    //   title : "'post[this.$route.params.id].metaTitle'",
    //   description : "'post[this.$route.params.id].metaDescription"
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
