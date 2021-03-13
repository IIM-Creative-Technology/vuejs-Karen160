<template>
    <div>
        <img :src="posts[$route.params.id].img" :alt="posts[$route.params.id].title">
        <h2>{{posts[$route.params.id].metaDesc}}</h2>
        <p>{{posts[$route.params.id].content}}</p>
        <span>Posté le {{posts[$route.params.id].date}}</span>
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