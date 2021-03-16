<template>
    <section>
        <label>Email :</label>
        <input type="text">
        <br><br><br>
        <label>Mot de passe :</label>
        <input type="text">
        <br><br><br>
        <button>Se connecter</button>
        <p>Pas encore de compte ? <a href="">S'inscrire</a></p>
    </section>
</template>

<script>
    export default {
        data() {},

        computed: {},

        components: {}
    }
</script>

<style scoped>
    section{
        display: block;
        margin: 100px auto;
        text-align: center;
    }

    label{
        font-size: 20px;
    }

    label:nth-child(1){
        margin-right: 150px;
    }

    label:nth-child(6){
        margin-right: 80px;
    }

    input{
        padding : 10px 50px;
    }

    button{
        text-transform: uppercase;
        font-size: 15px;
        background-color: white;
        border: 1px solid black;
        padding: 10px 100px;
        cursor: pointer;
    }

    p, a{
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

</style>