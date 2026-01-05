<template>
  <div class="flex flex-col min-h-screen transition duration-300 ease-in-out bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <NavBar class="flex-shrink-0" />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: { NavBar, Footer, RouterView },
  mounted() {
    document.body.classList.add('responsive-layout')
  },
  beforeUnmount() {
    document.body.classList.remove('responsive-layout')
  }
}
</script>

<style>
/* .section-page {
  @apply min-h-screen py-14;
  scroll-margin-top: 2.5rem;
} */

.responsive-layout {
  @apply text-base md:text-lg;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>