<template>
    <h1>
        Blog
    </h1>
    <div v-for="post in posts" :key="post.title" >
        <Blog :image="post.img" :description="post.content" :titre="post.title"/>
        
    </div>
</template>

<script>
import Blog from '@/components/blog.vue'
// import { mapState } from 'vuex'
export default {
  data () {
    return {
        // ...mapState(['post'])
    }
    
  },

    computed: {
      posts(){
          return this.$store.state.post
      }
  },

  components: {
      Blog
  }
}
</script>

<style scoped>
    
</style>