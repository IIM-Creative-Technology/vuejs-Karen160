<template>
    <router-link :to="'/blog/'+lien">
        <div>
            <img :src="image">
            <p>{{ description }}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        //Définir les props qui seront remplis dans la page où le composant est appelé
        props: [
            "image",
            "description",
            "lien",
        ],

        //Nomme le composant Poste
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