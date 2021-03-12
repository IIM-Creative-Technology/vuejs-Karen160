import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Admin from '../views/Admin.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import Modify from '../components/modify.vue'

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
          component : Modify
        }
      ]
  },
  {
    path: '/addpost',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
