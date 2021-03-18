<template>
    <h2>Créer une nouvelle page de blog</h2>
    <section>
        <article>
            <div id="inputText">
                <label for="title">Titre de la page</label>
                <input type="text" name="title" v-model="titre">
                <label for="metaTitle">Meta Title</label>
                <input type="text" name="metaTitle" v-model="metaTitle">
                <label for="metaDesc">Meta Description </label>
                <input type="text" name="metaDesc" v-model="metaDescription">
            </div>
            <div id="image">
                <img v-if="img == ''" src="http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
                    alt="">
                <img v-else v-bind:src="img" alt="">
                <input type="text" placeholder="url de l'image" v-model.trim="img">
            </div>
        </article>
        <div id="textarea">
            <label for="content">Corps du post</label>
            <textarea name="content" id="" cols="30" rows="10" v-model="content"></textarea>
        </div>
        <button @click='addPost'>Valider le post</button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                img: "",
            }
        },

        computed: {
            // Définir la date de la création de l'article
            date: function () {
                var date = new Date();
                var year = date.getFullYear();
                var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre",
                    "Octobre", "Novembre", "Décembre"
                ];
                var month = months[date.getMonth()];
                var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
                var day = days[date.getDay()];
                var jour = date.getDate();
                date = day + " " + jour + " " + month + " " + year;
                return date;
            },

            // Fonction pour aller chercher l'article précis
            posts() {
                return this.$store.state.post
            },
        },

        methods: {
            // Enregistrer les informations de l'article
            addPost() {
                this.$store.dispatch('addPost', {
                    title: this.titre,
                    metaTitle: this.metaTitle,
                    metaDesc: this.metaDescription,
                    img: this.img,
                    content: this.content,
                    date: this.date,
                    author: this.$store.state.user[this.$store.state.token].pseudo,
                    imgauthor: this.$store.state.user[this.$store.state.token].img
                })
            }
        }
    }
</script>

<style scoped>
    article {
        display: flex;
        justify-content: space-around;
        margin-top: 55px;
    }

    #inputText {
        display: flex;
        width: 40%;
        flex-wrap: wrap;
        align-items: center;
    }

    #inputText * {
        width: 45%;
        margin-bottom: 15px;
    }

    #image {
        display: flex;
        flex-direction: column;
    }

    img {
        height: 200px;
        width: 200px;
        border-radius: 200px;
    }

    #textarea {
        align-items: center;
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }

    #textarea label {
        margin-right: 50px;
    }

    button {
        border: 1px solid black;
        padding: 10px 40px;
        font-size: 14px;
        cursor: pointer;
        display: block;
        margin: 30px auto;
    }

    h2 {
        text-align: center;
    }
</style>