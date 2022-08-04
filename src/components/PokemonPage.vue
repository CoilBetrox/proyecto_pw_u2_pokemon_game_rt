<template>
    <h1 v-if="!pokemonCorrrecto">Espere por favor...</h1>
    <div v-else>    
    <!-- <div v-if="pokemonCorrrecto"> -->
        <h1>¿Quien ese este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemonCorrrecto.id" :mostrarPokemon="mostrarPokemon"/>
        <PokemonOption :pokemons="pokemosArr" @eventoHijo="validarRespuesta($event)"/>
    </div>
    <p></p>

    <div v-if="mostrarMensaje">
        <h1>{{mensajeResultado}}</h1>
        <button v-on:click="resetearJuego">NuevoJuego</button>
    </div>
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
            mostrarPokemon:false,
            mensajeResultado:"",
            mostrarMensaje:false
        }
    },
    methods:{
        async cargaPokemonInicial(){
            this.pokemosArr = await getPokemonOptions()
            const numeroAleatorio = Math.floor(Math.random()*4)
            console.log(numeroAleatorio)
            this.pokemonCorrrecto = this.pokemosArr[numeroAleatorio]

            //Importar varios metodos de un archivo
            console.log('impresion  desde el page')
            console.log(this.pokemosArr)
        },
        validarRespuesta(pokemonSeleccionadoHijo){
            const idPoke = pokemonSeleccionadoHijo.part1;
            const namePoke = pokemonSeleccionadoHijo.part2;
            
            this.mostrarPokemon = true
            console.log(idPoke)
            console.log(namePoke)
            
            if(this.pokemonCorrrecto.id === idPoke){
                console.log('correcto');
                this.mensajeResultado = `Correcto, ${this.pokemonCorrrecto.nombre}`;
                
            }else{
                console.log('incorrecto')
                this.mensajeResultado = `Error, el pokemon correcto es: , ${this.pokemonCorrrecto.nombre}`;
            }
            this.mostrarMensaje = true;
        },
        resetearJuego(){
            this.pokemosArr = [];
            this.pokemonCorrrecto = null;
            this.mostrarPokemon = false;
            this.mensajeResultado = "";
            this.mostrarMensaje = false;
            this.cargaPokemonInicial();
        }
    },
    mounted(){
        this.cargaPokemonInicial();
    }
}
</script>

<style>

</style>