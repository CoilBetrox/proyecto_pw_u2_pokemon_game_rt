<template>
    <!-- TODO opciones-->
    <h1>¿Quien ese este pokemon?</h1>
    <PokemonPicture :pokemonId="144" :mostrarPokemon="true"/>
    <PokemonOption/>
    <p></p>
</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOption from '@/components/PokemonOption.vue'


export default {
    components:{
        PokemonPicture,
        PokemonOption
    }
}
</script>

<style>

</style>