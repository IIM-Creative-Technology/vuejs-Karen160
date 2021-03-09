<template>
    <h1>Créer une nouvelle page de blog</h1>

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
                <img v-if="img == ''" src="http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png" alt="">
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
    <div v-for="post in posts" :key="post.title">
        <h1>{{post.title}}</h1>
        <h2>{{post.metaTitle}}</h2>
        <h2>{{post.metaDesc}}</h2>
        <img :src="post.img" alt="">
    </div>
</template>

<script>
// import { createStore } from './store/index'
export default {
  data () {
    return {
        img: "",
    }
  },

  computed: {
      posts(){
          return this.$store.state.post
      }
  },
  
  methods: {
      addPost: function() {
                if(this.titre != ""){
                    if(this.metaTitle != ""){
                        if(this.metaDescription != ""){
                            if(this.img == ""){
                                this.img = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png";
                                this.$store.state.post.push({
                                    title: this.titre,
                                    metaTitle: this.metaTitle,
                                    metaDesc: this.metaDescription,
                                    img: this.img,
                                    content: this.content
                                })
                            }
                            
                            console.log(this.$store.state.post);
                        }else{
                            alert('Renseignez la meta description');
                        }
                    }else{
                        alert('Renseignez le meta title');
                    }
                    
                
                }else{
                    alert('Renseignez le titre');
                }
               
            },
  }
    
}
</script>

<style scoped >
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