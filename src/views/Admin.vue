<template>
<router-link to="/addpost"><button>add Post</button></router-link>
  <div id="adminDiv">
      <div class="poste" v-for="(post, index) in posts" :key="(post, index)">
        <PosteAdmin v-if="index <= count" :image="post.img" :description="post.metaDesc" :lien="index"  @supprime="poubelle(index)"></PosteAdmin>
      </div>
      <button v-if="posts.length > count+1" @click="count += 2">voir plus ...</button>
    <router-view></router-view>
  </div>
</template>

<script>
import PosteAdmin from '@/components/poste-admin.vue'
export default {
  data () {
    return {
      count : 2,
    }
  },
  methods: {
    poubelle(index){
        this.$store.commit('deletePost', index)
      }
  },
  computed: {
    /// Fonction pour avoir la table post
      posts(){
          return this.$store.state.post
      },


  },

    components: {
        PosteAdmin
    },
}
</script>

<style scoped>
    #adminDiv{
      display: flex;
      flex-wrap: wrap;
    }

    .poste{
      width:90%;
    }
</style>