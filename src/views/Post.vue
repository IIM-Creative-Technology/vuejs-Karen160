<template>
    <div>
        <img :src="posts[index].img" :alt="posts[index].title">
        <h2>{{posts[index]}}</h2>
        <p>{{posts[index].content}}</p>
        <article>
        <span>Posté le {{posts[index].date}}</span>
          <div>
            <img :src="posts[index].imgauthor">
            <span>{{posts[index].author}}</span>
          </div>
        </article>
    </div>
</template>

<script>
export default {
    computed: {
      posts(){
        return this.$store.state.post
      },
      index(){
        var index = this.$store.state.post.findIndex(post => post.title === this.$route.params.title)
        return index
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
    font-size: 16px;
    padding-bottom: 20px;
  }

  span{
    font-size: 14px;
  }

  article{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
     align-items: center;
  }

  article div{
    padding: 0;
    margin: 0;
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
  }

  article img{
    border-radius: 100px;
    width: 100px;
    height: 100px;
  }
  
</style>