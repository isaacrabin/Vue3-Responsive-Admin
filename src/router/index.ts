import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:'home',
            component: Home
        },
        {
            path:'/about',
            name:'about',
            component:() => import('../views/About.vue')
        },
        {
            path:'/contact',
            name:'contact',
            component:() => import('../views/Contact.vue')
        },
        {
            path:'/team',
            name:'team',
            component:() => import('../views/Team.vue')
        },
        {
            path:'/settings',
            name:'settings',
            component:() => import('../views/Settings.vue')
        }
    ]
})

export default router