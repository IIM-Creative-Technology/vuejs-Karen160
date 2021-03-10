import VueX from 'vuex';


export default new VueX.Store({

  state: {
    post : [],
  },

  mutations: {

    addPost(state, payload){
      if(payload[0] != ""){
        if(payload[1] != ""){
            if(payload[2] != ""){
              if(payload[3] == ""){
                payload[3] = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
              }
              state.post.push({
        
                title: payload[0],
                metaTitle: payload[1],
                metaDesc: payload[2],
                img: payload[3],
                content: payload[4]
            }) 
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

    addPost(context) {
      
      if(this.titre != ""){
        
          if(this.metaTitle != ""){
           
              if(this.metaDescription != ""){
               
                  
                    
                    context.commit('addPost', )  
                        
                  
                  
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

  modules: {
  }

})
