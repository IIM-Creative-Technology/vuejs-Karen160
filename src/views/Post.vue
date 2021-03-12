<template>
    <h1>
        Post
    </h1>
    <div v-for="post in posts" :key="post.metaTitle">
        <img :src="post.img" alt="">
        <h1>{{post.title}}</h1>
        <p>{{post.content}}</p>
        <span>Posté le {{post.date}}</span>
    </div>
</template>

<script>
export default {
    
    computed: {
      posts(){
        return this.$store.state.post.filter(post=> post.metaTitle === this.$route.params.metaTitle)
      }
  },
    
}
</script>

<style scoped>
    
</style>