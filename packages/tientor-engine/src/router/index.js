import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/developer',
            component: () => import('@/layout/index.vue'),
            children: [
                {
                    path: 'developer',
                    name: 'developer',
                    component: () => import('@/views/build/index.vue')
                }
            ]
        }
    ],
})

export default router
