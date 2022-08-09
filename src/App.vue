<template>
  
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <PokemonPage/> -->
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
 
  <ComponentePicture/>
  
</template>

<script>

import AboutPage from './modulos/pokemon/pages/AboutPage.vue'
import ComponentePicture from "./modulos/pokemon/componentes/ComponentePicture.vue"
import PokemonPage from "./modulos/pokemon/pages/PokemonPage.vue"

export default {
  name: 'App',
  components: {
    PokemonPage,
    AboutPage,
    ComponentePicture
    
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
  margin-top: 60px;
}
</style>
