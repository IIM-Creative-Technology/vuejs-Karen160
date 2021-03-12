<template>
  <div id="adminDiv">
    <router-link to="/addpost">
      <button>Créer une page</button>
    </router-link>
    <section>
      <PosteAdmin :image="post.img" :description="post.metaDesc" :lien="index" v-for="(post, index) in posts"
        :key="(post, index)"></PosteAdmin>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import PosteAdmin from '@/components/poste-admin.vue'
  export default {
    computed: {
      /// Fonction pour avoir la table post
      posts() {
        return this.$store.state.post
      }
    },

    components: {
      PosteAdmin
    },
  }
</script>

<style scoped>
  section {
    display: flex;
    width: 100%;
    align-items: center;
  }

  article{
    border: 1px solid black;
    padding: 10px;
    display: block;
  }

  #adminDiv button {
    position: absolute;
    right: 100px;
    border: 1px solid black;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
  }
</style>