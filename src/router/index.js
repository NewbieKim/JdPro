import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        /* {
                    path: '/',
                    name: 'register',
                    redirect: '/login' //重点向
                }, */
        {
            path: '/',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Login.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ('../views/Index.vue')
        }
    ]
})

export default router