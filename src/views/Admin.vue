<template>
  <div id="adminDiv">
      <router-link to="/addpost"><button>add Post</button></router-link>
      <div>
        <PosteAdmin :image="post.img" :description="post.metaDesc" :lien="index" v-for="(post, index) in posts" :key="(post, index)"></PosteAdmin>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PosteAdmin from '@/components/poste-admin.vue'
export default {
  computed: {
    /// Fonction pour avoir la table post
      posts(){
          return this.$store.state.post
      }
  },

    components: {
        PosteAdmin
    },
}
</script>

<style scoped>
    #adminDiv{
      display: flex
    }
</style>