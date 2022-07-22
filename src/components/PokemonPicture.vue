<template>

    <div class="pokemon-container">
        <img class="pokemon-oculto" :src="imagenFuente" alt="Imagen no encontrada"/>
        
        <img v-if="mostrarPokemon" :src="imagenFuente" alt="Imagen no encontrada"/>
    </div>


</template>

<script>
export default {
    props:{
        pokemonId:{
            type: Number,
            required:true
        },
        mostrarPokemon:{
            type: Boolean,
            required:true,
            default:false
        }
    },
    computed:{
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        
        }
    }
}
</script>

<style>

.pokemon-oculto{
    filter: brightness(0);
}

img{
    height: 200px;
    position: absolute;
    right: 40%;
}

.pokemon-container{
    height: 250px;
}

</style>