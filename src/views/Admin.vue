<template>
  <div>
      <router-view></router-view>
      <Blog/>
     
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
