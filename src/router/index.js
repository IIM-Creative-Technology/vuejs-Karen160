import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Admin from '../views/Admin.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import Modify from '../components/modify.vue'
// import post from '../store/index'

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
    path: '/post/:id',
    name: 'Post',
    component: Post,
    // meta: {
    //   title : "'post[this.$route.params.id].metaTitle'",
    //   description : "'post[this.$route.params.id].metaDescription"
    // }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
