<template>
    <!-- TODO opciones-->
    <h1>¿Quien ese este pokemon?</h1>
    <PokemonPicture :pokemonId="144" :mostrarPokemon="true"/>
    <PokemonOption :pokemons="pokemosArr"/>
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
            pokemosArr:[]
        }
    },
    methods:{
        async obtenerPokemonsArreglo(){
            this.pokemosArr = await getPokemonOptions()
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