<template>
  <div class="flex flex-col min-h-screen transition duration-300 ease-in-out bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <NavBar class="flex-shrink-0" />
    
    <main class="flex-grow">
      <section id="home" class="section-page">
        <Home />
      </section>
      
      <section id="about" class="section-page">
        <About />
      </section>
      
      <section id="portfolio" class="section-page">
        <Portfolio />
      </section>
      
      <section id="contact" class="section-page">
        <Contact />
      </section>
    </main>

    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import Home from '@/components/sections/Home.vue'
import About from '@/components/sections/About.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Contact from '@/components/sections/Contact.vue'

export default {
  components: {
    NavBar,
    Footer,
    Home,
    About,
    Portfolio,
    Contact
  },
  mounted() {
    document.body.classList.add('responsive-layout')
  },
  beforeUnmount() {
    document.body.classList.remove('responsive-layout')
  }
}
</script>

<style>
.section-page {
  @apply min-h-screen py-14;
  scroll-margin-top: 2.5rem; /* Sesuaikan dengan tinggi navbar */
}

.responsive-layout {
  @apply text-base md:text-lg;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>