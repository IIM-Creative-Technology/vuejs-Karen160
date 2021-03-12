import VueX from 'vuex';


export default new VueX.Store({

  state: {
    post : [],
  },

  mutations: {

    addPost(state, payload){
              state.post.push({
        
                title: payload[0],
                metaTitle: payload[1],
                metaDesc: payload[2],
                img: payload[3],
                content: payload[4],
                date: payload[5]

            }) 
            
      
    }
    

  },

  actions: {

    addPost(context, payload) {
      
      if(payload[0]){
        
          if(payload[1]){
           
              if(payload[2]){

                if(payload[3] == ""){
                  payload[3] = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
                }
               
                  
                    
                    context.commit('addPost', payload)  
                        
                  
                  
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
  },

  getters: {
    
    getPostByMetaTitle: (state) => (title) => {
      return state.post.find(post => post.metaTitle === title)
    }
  }

})
