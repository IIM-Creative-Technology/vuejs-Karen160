<template>
    <div v-for="post in posts" :key="post">
        <Poste :image="post.img" :titre="post.title" :description="post.metaDesc" :lien="post.metaTitle"></Poste>
        
    </div>
</template>

<script>
import Poste from '@/components/poste.vue'
// import { mapState } from 'vuex'
export default {
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