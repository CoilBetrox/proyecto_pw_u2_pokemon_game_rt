<template>
    <!-- HTML -->
    <input id="numm" v-model="ide" type="text" placeholder="Ingresa un numero"/>
    <p></p>
    <button v-on:click="obtenerPokemon">Consultar</button>
    <p></p>
    <label for="numm">{{ nombre }}</label>
    <p></p>
    <img v-if="imagen" v-bind:src="imagen" alt="imagen no encontrada">

</template>

<script>
export default {
    name: "Buscador_pokemon",
    data () {
        return{
            ide: "",
            nombre: "",
            imagen: null
        }
    },
    methods:{
        async obtenerNombre(){
            const { name } = await fetch('https://pokeapi.co/api/v2/pokemon/'+this.ide).then(r=>r.json());
            console.log(name)
            this.nombre = name
        },
        obtenerImagen(){ 
            const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.ide+".svg";
            this.imagen = img
        },
        obtenerPokemon(){
            this.obtenerNombre;
            this.obtenerImagen;
        }
    },
    watch:{
        ide(value, oldValue){
            console.log(value)
            console.log(oldValue)
            this.obtenerNombre()
            this.obtenerImagen()
        }
    }
}
</script>

<style>

label{
    display: block;
    text-transform: uppercase;
}

</style>