<template>
    <div v-for="(post, index) in posts" :key="(post, index)">
        <Poste :image="post.img" :titre="post.title" :description="post.metaDesc" :lien="index"></Poste>
        
    </div>
</template>

<script>
import Poste from '@/components/poste.vue'
// import { mapState } from 'vuex'
export default {
    computed: {
        /// Fonction pour avoir la table post
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