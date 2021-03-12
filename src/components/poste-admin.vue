<template>
  <div>
    <img :src="image">
    <p>{{ description }}</p>
    <!-- Lien pour afficher le modficateur de l'article précis -->
    <router-link :to="'/admin/modify/'+lien">
    <button class="edit">
        Editer
    </button>
    </router-link>
    <button class="supp">
        X
    </button>
  </div>
</template>

<script>
export default {
  props: [
      "image",
      "description",
      "lien"
  ],
    name: "PosteAdmin"
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
    font-size: 14px;
    padding: 0 10px;
    word-wrap: break-word;
    width: 50%;
}

.edit{
    border: 1px solid black;
    padding: 20px 40px;
    font-size: 14px;
    cursor: pointer;
}

.supp{
    border: 1px solid black;
    background-color: red;
    padding: 20px;
    font-size: 14px;
    color: white;
    margin-left: 20px;
    cursor: pointer;
}
</style>