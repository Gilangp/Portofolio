<template>
    <div>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </div>
</template>

<script>
import Home from '@/components/sections/Home.vue'
import About from '@/components/sections/About.vue'
import Skills from '@/components/sections/Skills.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Contact from '@/components/sections/Contact.vue'

export default {
    components: { Home, About, Skills, Portfolio, Contact }
}
</script>
