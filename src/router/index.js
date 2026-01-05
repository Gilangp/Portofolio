import { createRouter, createWebHistory } from 'vue-router'
import SinglePage from '@/pages/SinglePage.vue'

const routes = [
    { path: '/', name: 'home', component: SinglePage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, saved) {
        if (saved) return saved
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0 }
    }
})

export default router