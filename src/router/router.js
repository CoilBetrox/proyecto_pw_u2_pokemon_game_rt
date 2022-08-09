//import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createRouterMatcher, createWebHashHistory } from 'vue-router'

//import AboutPage from '@/modulos/pokemon/pages/AboutPage'
//import ListPage from '../modulos/pokemon/pages/ListPage'
//import PokemonPage from '../modulos/pokemon/pages/PokemonPage'
//import NoPageFound from '@/modulos/pokemon/pages/NoPageFound'

/*
const routes = [
    { path:'/',component: AboutPage },
    { path:'/list',component: ListPage },
    { path:'/pokemon',component: PokemonPage }  ,
    { path:'/:pathMatch(.*)*',component: NoPageFound },
     
]
*/

//Lazy Load
const routes = [
    { 
        path: '/', 
        component: ()=> import(/* webpackChunkName: "AboutPage" */ '@/modulos/pokemon/pages/AboutPage.vue') 
    },
    { 
        path: '/list', 
        component: ()=> import(/* webpackChunkName: "ListPage" */ '@/modulos/pokemon/pages/ListPage.vue') 
    },
    { 
        path: '/pokemon', 
        component: ()=> import(/* webpackChunkName: "PokemonPage" */ '@/modulos/pokemon/pages/PokemonPage.vue') 
    } ,
    { 
        path: '/:pathMatch(.*)*', 
        component: ()=> import(/* webpackChunkName: "NoPageFound" */ '@/modulos/pokemon/pages/NoPageFound.vue') 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
