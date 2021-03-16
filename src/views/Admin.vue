<template>
  <router-link to="/addpost">
    <button>Créer une page</button>
  </router-link>
  <div id="adminDiv">
    <section class="poste">
      <div v-for="(post, index) in posts" :key="(post, index)">
        <PosteAdmin v-if="index <= count" :image="post.img" :description="post.metaDesc" :lien="index"
          @supprime="poubelle(index)"></PosteAdmin>
      </div>
    </section>
    <router-view></router-view>
  </div>
  <button v-if="posts.length > count+1" @click="count += 2">Voir plus</button>
    
</template>

<script>
  import PosteAdmin from '@/components/poste-admin.vue'
  export default {
    data() {
      return {
        count: 2,
      }
    },
    methods: {
      poubelle(index) {
        this.$store.commit('deletePost', index)
      }
    },
    computed: {
      /// Fonction pour avoir la table post
      posts() {
        return this.$store.state.post
      },
    },

    components: {
      PosteAdmin
    },
  }
</script>

<style scoped>
  #adminDiv {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .poste{
    width: 70%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
  }

  article {
    border: 1px solid black;
    padding: 10px;
    display: block;
  }

  button:first-child {
    position: absolute;
    right: 100px;
    border: 1px solid black;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  button:last-child {
    border: 1px solid black;
    padding: 10px 30px;
    font-size: 14px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
  }
</style>