<template>
  <div>
      <router-link to="/addpost"><button>add Post</button></router-link>
      <Blog/>
    <router-view></router-view>
  </div>
</template>

<script>
import Blog from '@/components/blog.vue'
export default {
    components: {
        Blog
    }
}
</script>
