<template>
    <section>
        <article v-for="post in posts" :key="post">
            <div id="inputText">
                <label for="title">Titre de la page</label>
                <input type="text" name="title" v-model="titre" :placeholder="post.title" disabled>
                <label for="metaTitle">Meta Title</label>
                <input type="text" name="metaTitle" v-model="metaTitle" :placeholder="post.metaTitle">
                <label for="metaDesc">Meta Description </label>
                <input type="text" name="metaDesc" v-model="metaDescription" :placeholder="post.metaDesc">
            </div>
            <div id="image">
                <img v-if="img == ''" src="http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png" alt="">
                <img v-else v-bind:src="img" alt="">
                <input type="text" v-model.trim="img" :placeholder="post.img">
            </div>
        </article>
        <div id="textarea">
            <label for="content">Corps du post</label>
            <textarea name="content" id="" cols="30" rows="10" v-model="content" ></textarea>
        </div>
        <button >Valider le post</button>
    </section>
</template>

<script>
export default {

    computed: {
        /// Fonction pour aller chercher le post précis
      posts(){
        return this.$store.state.post[0],
        console.log(this.$store.state.post[0])
      }
  },
    
}
</script>

<style scoped>
    section{
        width: 45%;
    }
    article{
      display: flex;  
      justify-content: space-around;
      margin-top: 55px;
    }
    #inputText{
        display: flex;
        width: 40%;
        flex-wrap: wrap;
        align-items: center;
    }
    #inputText *{
        width:45%;
        margin-bottom: 15px;
    }
    #image{
        display: flex;
        flex-direction: column;
    }
    img{
        height: 150px;
        border-radius: 130px;
    }
    #textarea{
        align-items: center;
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
    #textarea label{
        margin-right: 50px;
    }
</style>