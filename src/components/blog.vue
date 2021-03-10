<template>
  <div>
   <img src="{{ image }}">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
    name: "Blog",
    props: {
      image,
      description
  },
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

</style>