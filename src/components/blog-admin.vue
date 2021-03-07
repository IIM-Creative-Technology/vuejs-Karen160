<template>
  <div>
    <img src="https://www.gamerguides.com/assets/guides/216/mona_genshin_impact_uhdpaper.com_4K_3.2971.jpg">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tempora ad assumenda esse, vel reiciendis rem amet error, magni fugiat officia enim labore eligendi temporibus hic velit. Laborum, a voluptates.</p>
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
    name: "BlogAdmin"
}
</script>

<style scoped>
div{
    padding: 50px;
    display: flex;
    justify-content: space-between;
    width: 80%;
}

img{
    width: 200px;
}

p{
    font-size: 12px;
}

.edit{
    border: 1px solid black;
    padding: 20px;
    font-size: 12px;
}

.supp{
    border: 1px solid black;
    background-color: red;
    padding: 20px;
    font-size: 12px;
    color: white;
}


</style>