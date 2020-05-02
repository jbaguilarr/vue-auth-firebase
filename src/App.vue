<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'Inicio'}" v-if="existeUsuario">Inicio</router-link> |
      <router-link :to="{name:'Registro'}" v-if="!existeUsuario">Registro</router-link> |
      <router-link :to="{name:'Ingreso'}" v-if="!existeUsuario">Ingreso</router-link> |
      <a @click="cerrarSession" v-if="existeUsuario">Cerrar Session</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapActions , mapGetters} from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['cerrarSession'])
  },  
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
