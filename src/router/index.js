import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: () => import('../pages/projects.vue') },
    { path: '/contact', component: () => import('../pages/contact.vue') },
    ]

    const router = createRouter({
    history: createWebHistory(),
    routes,
    })

export default router