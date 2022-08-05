import { createRouter, createWebHashHistory } from 'vue-router'

import AboutPage from '@/modulos/pokemon/pages/AboutPage'
import ListPage from '../modulos/pokemon/pages/ListPage'
import PokemonPage from '../modulos/pokemon/pages/PokemonPage'
import NoPageFound from '@/modulos/pokemon/pages/NoPageFound'

const routes = [
    { path:'/',component: AboutPage },
    { path:'/list',component: ListPage },
    { path:'/pokemon',component: PokemonPage }  ,
    { path:'/:pathMatch(.*)*',component: NoPageFound },
     
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router


