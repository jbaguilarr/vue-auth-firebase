import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

var firebase = require('firebase/app')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: ''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload;
    },
    setError(state,payload){
      state.error = payload;
    }
  },
  actions: {
    crearUsuario({commit},payload){
       firebase.auth().createUserWithEmailAndPassword(payload.email,payload.pass)
         .then(res=>{
            console.log(res)
            commit('setUsuario',{email: res.user.email,uid: res.user.uid})
            router.push({name:'Inicio'})
         })
         .catch(err=>{
            console.log(err)
            commit('setError',err.message)
         })
    },
    ingresoUsuario({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.pass)
      .then(res=>{
         console.log(res)
         commit('setUsuario',{email: res.user.email,uid: res.user.uid})
         router.push({name:'Inicio'})
      })
      .catch(err=>{
        console.log(err)
        commit('setError',err.message)
      })
    },
    detectarUsuario({commit},payload){
      if(payload!= null){
          commit('setUsuario',{email: payload.email,uid: payload.uid})
      }else{
        commit('setUsuario',null)
      }
    },
    cerrarSession({commit}){
        firebase.auth().signOut()
        commit('setUsuario',null)
        router.push({name: 'Ingreso'})
    }
  },
  getters:{
     existeUsuario(state){
       if(state.usuario === null || state.usuario === '' || state.usuario === undefined)
       {
         return false;
       }else{
         return true;
       }
     }
  },
  modules: {
  }
})
