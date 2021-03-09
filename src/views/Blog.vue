<template>
    <h1>
        Blog
    </h1>
    <div v-for="post in posts" :key="post.title">
        <h1>{{post.title}}</h1>
        <h2>{{post.metaTitle}}</h2>
        <h2>{{post.metaDesc}}</h2>
        <img :src="post.img" alt="">
    </div>
</template>

<script>
export default {
    computed: {
      posts(){
          return this.$store.state.post
      }
  },
}
</script>

<style scoped>
    
</style>