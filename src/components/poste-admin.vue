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
        <button class="supp" @click='remover'>
            X
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            //Pour supprimer l'article sélectionné
            remover(index) {
                this.$emit('supprime', index)
            },
        },

        //Définir les props qui seront remplis dans la page où le composant est appelé
        props: [
            "image",
            "description",
            "lien"
        ],

        //Nomme le composant PosteAdmin
        name: "PosteAdmin"
    }
</script>

<style scoped>
    div {
        padding: 50px;
        display: flex;
        justify-content: space-between;
        width: 80%;
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
        width: 50%;
    }

    .edit {
        border: 1px solid black;
        padding: 20px 40px;
        font-size: 14px;
        cursor: pointer;
    }

    .supp {
        border: 1px solid black;
        background-color: red;
        padding: 20px;
        font-size: 14px;
        color: white;
        margin-left: 20px;
        cursor: pointer;
    }
</style>