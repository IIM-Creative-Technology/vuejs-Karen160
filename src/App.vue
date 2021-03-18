<template>
  <!-- Barre de navigation en fonction de si l'utilisateur est connecté ou non -->
  <div id="nav">
    <router-link v-if="this.$store.state.token != null" to="/admin">Gérer le blog</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link v-if="this.$store.state.token == null" to="/login"> Login</router-link> |
    <router-link v-if="this.$store.state.token != null" @click="disconnect" to="/login">Déconnexion</router-link>
  </div>
  <router-view />
</template>


<script>
  export default {
    methods: {
      disconnect() {
        this.$store.state.token = null
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    text-decoration: underline;
  }
</style>