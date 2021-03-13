<template>
    <section>
        <article>
            <div id="inputText">
                <label for="title">Titre de la page</label>
                <input type="text" name="title" v-model="title" disabled>
                <label for="metaTitle">Meta Title</label>
                <input type="text" name="metaTitle" v-model="metaTitle" >
                <label for="metaDesc">Meta Description </label>
                <input type="text" name="metaDesc" v-model="metaDesc" >
            </div>
            <div id="image">
                <img v-if="posts[$route.params.id].img == ''" src="http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png" alt="">
                <img v-else v-bind:src="posts[$route.params.id].img" alt="">
                <input type="text" v-model.trim="img">
            </div>
        </article>
        <div id="textarea">
            <label for="content">Corps du post</label>
            <textarea name="content" id="" cols="30" rows="10" v-model="content" ></textarea>
        </div>
        <button @click="updatePost">Valider le post</button>
    </section>
</template>

<script>

export default {
  data () {
    return {
        title : this.$store.state.post[this.$route.params.id].title,
        metaTitle : this.$store.state.post[this.$route.params.id].metaTitle,
        metaDesc : this.$store.state.post[this.$route.params.id].metaDesc,
        img : this.$store.state.post[this.$route.params.id].img,
        content : this.$store.state.post[this.$route.params.id].content
    }
  },
  methods: {
      updatePost(){
          this.$store.dispatch('updatePost', [{
                                           title: this.title,
                                           metaTitle: this.metaTitle, 
                                           metaDesc: this.metaDesc, 
                                           img: this.img, 
                                           content: this.content, 
                                           date: this.date}, this.$route.params.id])
            
      }
  },

    computed: {
        /// Fonction pour aller chercher le post précis
      posts(){
        return this.$store.state.post
      },

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
            }
  },
    
}
</script>

<style scoped>
    section{
        width: 45%;
        background: grey;
        padding:15px;
        border-radius: 25px;
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