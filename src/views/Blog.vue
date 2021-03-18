<template>
    <div v-for="(post, index) in posts" :key="(post, index)">
        <Poste v-if="index <= count" :image="post.img" :titre="post.title" :description="post.metaDesc" :lien="post.title"></Poste>
    </div>
    <button v-if="posts.length > count+1" @click="count += 2">Voir plus</button>
</template>

<script>
import Poste from '@/components/poste.vue'
// import { mapState } from 'vuex'
export default {
    data() {
      return {
        count: 2,
      }
    },

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
    button {
    border: 1px solid black;
    padding: 10px 30px;
    font-size: 14px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
  }
</style>