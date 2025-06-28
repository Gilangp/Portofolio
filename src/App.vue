<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <NavBar class="flex-shrink-0" />

    <main class="flex-grow">
      <router-view />
    </main>

    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: { NavBar, Footer },
  mounted() {
    document.body.classList.add('responsive-layout')
  },
  beforeUnmount() {
    document.body.classList.remove('responsive-layout')
  }
}
</script>

<style>
.responsive-layout {
  @apply text-base md:text-lg;
}

.router-view-transition {
  transition: all 0.3s ease;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

a, button {
  @apply min-w-[44px] min-h-[44px]; /* ADA compliance */
}
</style>