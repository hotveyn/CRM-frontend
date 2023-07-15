import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import ViewHome from "@/views/ViewHome.vue";
import ViewLogin from "@/views/ViewLogin.vue";
import ViewTest from "@/views/ViewReg.vue";


const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: ViewHome
    },
    {
        name: 'login',
        path: '/login',
        component: ViewLogin
    },
    {
        name: 'reg',
        path: '/reg',
        component: ViewTest
    },
]


export const router = createRouter({
    history: createWebHistory(),
    routes
})
