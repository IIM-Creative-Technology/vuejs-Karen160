
import VueX from 'vuex';
import router from '../router/index.js'

export default new VueX.Store({
  state: {
    post: [],
    user:[],
    token: null
  },

  mutations: {
    // Pour ajouter un nouvelle article de blog
    addPost(state, payload) {
      if(state.post.find(post => post.title === payload.title)){
        alert("le titre existe déjà")
      }else{
        state.post.push(payload)
      }
    },

    // Pour modifier les articles de blog
    updatePost(state, payload) {
      console.log(payload[0])
      state.post[payload[1]] = payload[0]
    },

    // Pour supprimer un article de blog
    deletePost(state, payload) {
      state.post.splice(payload, 1)
    },

    // Pour s'inscrire 
    addUser(state, payload) {
      if(state.user.find(user => user.email === payload.email)){
        alert("l'email existe déjà")
      }else{
        state.user.push(payload)
        console.log(state.user)
      }
      
    },

    // Pour se connecter
    login(state, payload) {
      var index = state.user.findIndex(user => user.email === payload.email)
      if(state.user.find(user => user.email === payload.email)){
        if(state.user[index].password === payload.password){
          alert ('Bienvenue, vous êtes connectés')
          state.token = index
          router.push('/blog')
        }else{
          alert('Trompé de mot de passe')
        }
      }else{
        alert("L'email n'existe pas")
      }
    }


  },

  actions: {
    // Paramètre à respecter pour ajouter un nouvel article de blog
    addPost(context, payload) {
      if (payload.title) {
        if (payload.metaTitle) {
          if (payload.metaDesc) {
            if (payload.img == "") {
              payload.img = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
            }
            context.commit('addPost', payload),
              router.push('/admin')
          } else {
            alert('Renseignez la meta description');
          }
        } else {
          alert('Renseignez le meta title');
        }
      } else {
        alert('Renseignez le titre');
      }
    },

    // Paramètre à respecter pour ajouter un nouvel article de blog
    updatePost(context, payload) {
      if (payload[0].title) {
        if (payload[0].metaTitle) {
          if (payload[0].metaDesc) {
            if (payload[0].img == "") {
              payload[0].img = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
            }
            context.commit('updatePost', payload)
            router.push('/admin')
          } else {
            alert('Renseignez la meta description');
          }
        } else {
          alert('Renseignez le meta title');
        }
      } else {
        alert('Renseignez le titre');
      }
    },

    // Paramètre à respecter pour s'inscrire
    addUser(context, payload){
      if(payload.password){
        if(payload.pseudo){
          if(payload.email){
            if (payload.img == "") {
              payload.img = "http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png"
            }
            context.commit('addUser', payload)
            router.push('/login')
          }else{
            alert('Vous avez oublié votre email')
          }
        }else{
          alert('Vous avez oublié votre pseudo')
        }
        
      }else{
        alert('remplissez votre mot de passe')
      }
    },

    // Erreur lors de la connexion
    login(context, payload){
      if(payload.email){
        if(payload.password){
          context.commit('login', payload)
        }else{
          alert("Vous avez oublié le mot de passe")
        }
      }else{
        alert("Vous avez oublié l'email")
      }
    }
  },

  modules: {},

  getters: {
    // Définir un titre unique pour chaque post
    getPostByMetaTitle: (state) => (title) => {
      return state.post.find(post => post.metaTitle === title)
    }
  }
})