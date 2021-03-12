<template>
<router-link :to="'/post/'+lien">
  <div >
      <img :src="image">
      <h1>titre : {{ titre }}</h1>
      <p>description : {{ description }}</p>
  </div>    
</router-link>  
</template>

<script>
export default {
    props: [
      "image",
      "description",
      "titre",
      "lien"
    ],

    name: "Poste"
    
}
</script>

<style scoped>
div{
    padding: 50px;
    display: flex;
    justify-content: space-between;
    width: 70%;
    border: 1px solid black;
    align-items: center;
    margin: 0 auto;
}

img{
    width: 200px;
}

p{
    font-size: 12px;
    padding: 0 10px;
    text-decoration: none;
}

</style>