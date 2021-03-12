<template>
    <div v-for="post in posts" :key="post.metaTitle">
        <img :src="post.img" :alt="post.title">
        <h2>{{post.title}}</h2>
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
  div{
    margin: auto;
    padding: 10px 50px;
  }

  img{
    width: 30%;
    display: block;
    margin: auto;
  }

  h2{
    font-size: 30px;
    text-align: center;
  }

  p{
    font-size: 14px;
    padding-bottom: 20px;
  }

  span{
    font-size: 12px;
  }
</style>