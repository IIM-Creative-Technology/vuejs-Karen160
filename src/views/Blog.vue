<template>
    <div v-for="post in posts" :key="post">
        <Poste :image="post.img" :description="post.metaDesc"></Poste>
        
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