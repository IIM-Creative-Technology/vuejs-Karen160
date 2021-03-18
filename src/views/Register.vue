<template>
    <section>
        <img v-if="img == ''" src="http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png" alt="">
        <img v-else v-bind:src="img" alt="">
        <br><br>
        <label>Photo de profil :</label>
        <input type="text" placeholder="url de l'image" v-model.trim="img">
        <br><br><br>
        <label>Pseudo :</label>
        <input type="text" placeholder="pseudo" v-model="pseudo">
        <br><br><br>
        <label>Email :</label>
        <input type="text" v-model="email">
        <br><br><br>
        <label>Mot de passe :</label>
        <input type="text" v-model="password">
        <br><br><br>
        <button @click="addUser">S'inscrire</button>
        <p>Déjà inscrit ? <router-link to="/login"><span>Se connecter</span></router-link>
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                img: "",
            }
        },

        methods: {
            // Enregistrer les informations du nouvel utilisateur
            addUser() {
                this.$store.dispatch('addUser', {
                    email: this.email,
                    password: this.password,
                    img: this.img,
                    pseudo: this.pseudo

                })
            }
        }
    }
</script>

<style scoped>
    section {
        display: block;
        margin: 100px auto;
        text-align: center;
    }

    label {
        font-size: 20px;
    }

    label:nth-child(4) {
        margin-right: 70px;
    }

    label:nth-child(9) {
        margin-right: 130px;
    }

    label:nth-child(14) {
        margin-right: 150px;
    }

    label:nth-child(19) {
        margin-right: 80px;
    }

    input {
        padding: 10px 50px;
    }

    button {
        text-transform: uppercase;
        font-size: 15px;
        background-color: white;
        border: 1px solid black;
        padding: 10px 100px;
        cursor: pointer;
    }

    p,
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        cursor: pointer;
    }

    /* #image {
        display: flex;
        flex-direction: column;
    } */

    img {
        height: 200px;
        width: 200px;
        border-radius: 200px;
    }
</style>