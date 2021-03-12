<template>
    <h1>
        Blog
    </h1>
    <div v-for="post in posts" :key="post">
        <Poste :image="post.img" :titre="post.title" :description="post.content" :lien="post.metaTitle"></Poste>
        
    </div>
</template>

<script>
import Poste from '@/components/blog.vue'
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
      Poste
  }
}
</script>

<style scoped>
    
</style>