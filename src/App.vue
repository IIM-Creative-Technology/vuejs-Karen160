<template>
  <div id="nav">
      <router-link to="/admin">Gérer le blog</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="">Login</router-link>
  </div>
  <router-view/>
</template>

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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
