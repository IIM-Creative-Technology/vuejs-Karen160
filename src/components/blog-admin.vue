<template>
  <div>
    <img src="{{ image }}">
    <p>{{ description }}</p>
    <button class="edit">
        Editer
    </button>
    <button class="supp">
        X
    </button>
  </div>
</template>

<script>
export default {
  props: {
      image,
      description
  },
    name: "BlogAdmin"
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
}

.edit{
    border: 1px solid black;
    padding: 20px 40px;
    font-size: 12px;
    cursor: pointer;
}

.supp{
    border: 1px solid black;
    background-color: red;
    padding: 20px;
    font-size: 12px;
    color: white;
    margin-left: 20px;
    cursor: pointer;
}


</style>