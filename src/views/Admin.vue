<template>
  <div>
      <router-view></router-view>
      <BlogAdmin></BlogAdmin>
     
  </div>
</template>

<script>
import BlogAdmin from '@/components/blog-admin.vue'
export default {
    name : admin,
    components: {
        BlogAdmin
    }
}
</script>