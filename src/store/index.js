
import VueX from 'vuex';

import router from '../router/index.js'




export default new VueX.Store({

  state: {
    post: [],
    user:[],
    token: null
  },

  mutations: {

    addPost(state, payload) {
      state.post.push(payload)
    },

    updatePost(state, payload) {
      console.log(payload[0])
      state.post[payload[1]] = payload[0]
    },

    deletePost(state, payload) {
      state.post.splice(payload, 1)
    },


    addUser(state, payload) {
      if(state.user.find(user => user.email === payload.email)){
        alert("l'email existe déjà")
      }else{
        state.user.push(payload)
        console.log(state.user)
      }
      
    },

    login(state, payload) {
      var index = state.user.findIndex(user => user.email === payload.email)
      if(state.user.find(user => user.email === payload.email)){
        if(state.user[index].password === payload.password){
          alert ('super vous êtes connectés')
          state.token = index
          alert(state.token)
        }else{
          alert('Trompé de mot de passe')
        }
      }else{
        alert("l'email n'existe pas")
      }
    }


  },

  actions: {

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

    addUser(context, payload){
      if(payload.password){
          context.commit('addUser', payload)
          router.push('/login')
      }else{
        alert('remplissez votre mot de passe')
      }
    },

    login(context, payload){
      context.commit('login', payload)
      router.push('/blog')
    }
  },

  modules: {},

  getters: {
    getPostByMetaTitle: (state) => (title) => {
      return state.post.find(post => post.metaTitle === title)
    }
  }
})