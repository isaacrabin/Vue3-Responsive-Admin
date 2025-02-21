import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import Login from "../views/Login.vue";
import AdminLayout from "../layouts/AdminLayout.vue";


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:'auth',
            component: AuthLayout,
            redirect:'/login',
            children:[
                {
                    path:"/login",
                    component:() => import('../views/Login.vue')
                }
            ]

        },
        {
            path:"/app",
            component:AdminLayout,         
            children:[
                {
                    path:'home',
                    name:'home',
                    component:() => import('../views/Home.vue')
                },
                {
                    path:'about',
                    name:'about',
                    component:() => import('../views/About.vue')
                },
                {
                    path:'contact',
                    name:'contact',
                    component:() => import('../views/Contact.vue')
                },
                {
                    path:'team',
                    name:'team',
                    component:() => import('../views/Team.vue')
                },
                {
                    path:'settings',
                    name:'settings',
                    component:() => import('../views/Settings.vue')
                }
            ]
        }
    ]
})


export default router