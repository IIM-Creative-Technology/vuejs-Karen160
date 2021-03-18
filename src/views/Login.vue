<template>
    <section>
        <label>Email :</label>
        <input type="text" v-model="email">
        <br><br><br>
        <label>Mot de passe :</label>
        <input type="text" v-model="password">
        <br><br><br>
        <button @click="login">Se connecter</button>
        <p>Pas encore de compte ? <router-link to="/register"><span>S'inscrire</span></router-link>
        </p>
    </section>
</template>

<script>
    export default {
        methods: {
            // Enregistrer les informations rentrantes : email et mot de passe
            login() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
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

    label:nth-child(1) {
        margin-right: 150px;
    }

    label:nth-child(6) {
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
</style>