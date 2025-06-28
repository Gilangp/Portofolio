import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', components: Home },
  { path: '/about', name: 'About', components: About },
  { path: '/portfolio', name: 'Portfolio', components: Portfolio },
  { path: '/contact', name: 'Contact', components: Contact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router