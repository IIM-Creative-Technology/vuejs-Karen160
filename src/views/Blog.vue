<template>
    <!-- On récupère tous les posts de blog enregistrer grâce à une boucle v-for -->
    <div v-for="post in posts" :key="post.title">
        <Blog 
        :image = "post.img"
        :description = "post.content"
        />
        
        <!-- <h1>{{post.title}}</h1>
        <h2>{{post.metaTitle}}</h2>
        <h2>{{post.metaDesc}}</h2>
        <img :src="post.img" alt=""> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Blog from '@/components/blog.vue'
export default {
  data () {
    return {
        ...mapState(['post'])
    }
  },
    computed: {
      posts(){
          console.log(this.$store.state.post)
          return this.$store.state.post
           
      },
      
  },
  components: {
        Blog
    },
}
</script>

<style scoped>
    
</style>