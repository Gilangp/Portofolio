<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <!-- Navbar with responsive breakpoints -->
    <NavBar class="flex-shrink-0" />

    <!-- Main content that grows to fill space -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: { NavBar, Footer },
  mounted() {
    // Add responsive helper class to body
    document.body.classList.add('responsive-layout')
  },
  beforeUnmount() {
    document.body.classList.remove('responsive-layout')
  }
}
</script>

<style>
/* Global responsive styles */
.responsive-layout {
  @apply text-base md:text-lg; /* Responsive base font size */
}

/* Smooth transitions for route changes */
.router-view-transition {
  transition: all 0.3s ease;
}

/* Responsive scroll behavior */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Minimum tap target size for mobile */
a, button {
  @apply min-w-[44px] min-h-[44px]; /* ADA compliance */
}
</style>