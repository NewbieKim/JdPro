import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import list from '../list/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'login',
            redirect: '/login'
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login1',
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
                import ('../views/Index.vue'),
        }, {
            path: '/botnav',
            name: 'botnav',
            component: () =>
                import ('../public/Botnav.vue'),
            children: [{
                    path: 'list',
                    name: 'list',
                    component: () =>
                        import ('../list/Index.vue'),
                },
                {
                    path: 'index',
                    name: 'index1',
                    component: () =>
                        import ('../views/Index.vue'),
                },
                {
                    path: 'search',
                    name: 'search',
                    component: () =>
                        import ('../search/Index.vue'),
                }, {
                    path: 'cart',
                    name: 'cart',
                    component: () =>
                        import ('../cart/Index.vue'),
                    meta: {
                        requireAuth: true //登录权限
                    }
                }, {
                    path: 'mine',
                    name: 'mine',
                    component: () =>
                        import ('../mine/Index'),
                    meta: {
                        requireAuth: true //登录权限
                    }
                },
            ]
        }
    ]
})

export default router