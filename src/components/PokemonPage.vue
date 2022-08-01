<template>
    <h1 v-if="!pokemonCorrrecto">Espere por favor...</h1>
    <div v-else>    
    <!-- <div v-if="pokemonCorrrecto"> -->
        <h1>¿Quien ese este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemonCorrrecto.id" :mostrarPokemon="mostrarPokemon"/>
        <PokemonOption :pokemons="pokemosArr"/>
    </div>
    <p></p>
</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOption from '@/components/PokemonOption.vue'

import getPokemonOptions from '@/helpers/obtenerOpcionesPokemon'

export default {
    components:{
        PokemonPicture,
        PokemonOption
    },
    data(){
        return{
            pokemosArr:[],
            pokemonCorrrecto: null,
            mostrarPokemon:false
        }
    },
    methods:{
        async obtenerPokemonsArreglo(){
            this.pokemosArr = await getPokemonOptions()
            const numeroAleatorio = Math.floor(Math.random()*4)
            console.log(numeroAleatorio)
            this.pokemonCorrrecto = this.pokemosArr[numeroAleatorio]

            //Importar varios metodos de un archivo
            console.log('impresion  desde el page')
            console.log(this.pokemosArr)
        }
    },
    mounted(){
        this.obtenerPokemonsArreglo()
    }
}
</script>

<style>

</style>