import VueX from 'vuex';
import router from '../router/index.js'


export default new VueX.Store({

  state: {
    post : [],
  },

  mutations: {

    addPost(state, payload){
              state.post.push(payload) 
            
      
    },

    updatePost(state, payload){
      console.log(payload[0])
      state.post[payload[1]]= payload[0]
    },

    deletePost(state, payload){
      state.post.splice(payload, 1)
    }
    

  },

  actions: {

    addPost(context, payload) {
      if(payload.title){
          if(payload.metaTitle){
              if(payload.metaDesc){
                if(payload.img == ""){
                  payload.img = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
                }
                    context.commit('addPost', payload),
                    router.push('/admin')  
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

  updatePost(context, payload) {
    if(payload[0].title){
      if(payload[0].metaTitle){
          if(payload[0].metaDesc){
            if(payload[0].img == ""){
              payload[0].img = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
            }
            context.commit('updatePost', payload)
            router.push('/admin') 
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
