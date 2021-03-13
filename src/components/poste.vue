<template>
    <router-link :to="'/post/'+lien">
        <div>
            <img :src="image">
            <p>{{ description }}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: [
            "image",
            "description",
            "lien"
        ],

        name: "Poste"
    }
</script>

<style scoped>
    div {
        padding: 50px;
        display: flex;
        width: 70%;
        border: 1px solid black;
        align-items: center;
        margin: 20px auto;
    }

    img {
        width: 200px;
    }

    p {
        font-size: 14px;
        padding: 0 10px;
        word-wrap: break-word;
        width: 70%;
    }

    a {
        text-decoration: none;
        color: black
    }
</style>