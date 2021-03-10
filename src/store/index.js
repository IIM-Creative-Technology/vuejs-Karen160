import VueX from 'vuex';


export default new VueX.Store({

  state: {
    post : [],
  },

  mutations: {

    addPost(state) {
      if(this.titre != ""){
          if(this.metaTitle != ""){
              if(this.metaDescription != ""){
                  if(this.img == ""){
                      this.img = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png";
                        state.post.push({
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
     
  }

  },

  actions: {

    

  },

  modules: {
  }

})
