<template>
    <div class="option-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" v-on:click="$emit('eventoHijo', {part1:pokemon.id, part2:pokemon.nombre})"> {{pokemon.nombre}} </li>
        </ul>
    </div>

<p></p>

</template>

<script>
export default {
    props:{
        pokemons:{
            type:Array,
            required:true
        }
    }

}
</script>

<style>

ul{
    list-style-type: none;
}

li{
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}

li:hover{
    background-color: black;
    color: white;
}

.option-container{
    display: flex;
    justify-content: center;
}
</style>