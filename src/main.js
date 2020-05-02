import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require('firebase/app')

require('firebase/auth')
// require('firebase/database')
// require('firebase/firestore')
// require('firebase/messaging')
// require('firebase/functions') 

var firebaseConfig = {
  apiKey: "AIzaSyCxZoVZC_sWwTBTu01vM1fsVpQoo6yuzKE",
  authDomain: "crud-firebase-29b1e.firebaseapp.com",
  databaseURL: "https://crud-firebase-29b1e.firebaseio.com",
  projectId: "crud-firebase-29b1e",
  storageBucket: "crud-firebase-29b1e.appspot.com",
  messagingSenderId: "924009433140",
  appId: "1:924009433140:web:8afecbb4476dd7e1892261"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user)=>{
  console.log(user)
  if(user){
     store.dispatch('detectarUsuario',{email:user.email,uid:user.uid})
  }else{
    store.dispatch('detectarUsuario',null)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
});


