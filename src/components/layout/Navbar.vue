<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-blue/95 backdrop-blur-md py-2 transition-all duration-300 border-b border-gray-200/50 dark:border-gray-700/30"
    :class="{ 'bg-white/95 dark:bg-dark-blue shadow-sm': isScrolled }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center text-xl font-bold text-gray-900 dark:text-white hover:text-light-blue transition-colors duration-200"
        >
          <span class="text-light-blue">G</span>ilangprnm
        </router-link>

        <!-- Mobile Menu -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="sm:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-1 focus:ring-light-blue/50"
          aria-label="Toggle menu"
        >
          <transition name="icon" mode="out-in">
            <component
              :is="isMenuOpen ? XMarkIcon : Bars3Icon"
              class="w-6 h-6"
            />
          </transition>
        </button>

        <!-- Navigation & Toggle -->
        <div class="hidden sm:flex items-center gap-2 sm:gap-4">
          <ul class="flex space-x-2 sm:space-x-4">
            <li v-for="link in links" :key="link.path">
              <router-link
                :to="link.path"
                class="relative px-2 py-1 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                active-class="text-gray-900 dark:text-white"
              >
                {{ link.name }}
                <span
                  v-if="$route.path === link.path"
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-light-blue rounded-full"
                ></span>
              </router-link>
            </li>
          </ul>

          <button
            @click="toggleDarkMode"
            class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-light-blue hover:bg-light-blue/10 dark:hover:bg-light-blue/20 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-light-blue/50"
            aria-label="Toggle dark mode"
          >
            <transition name="icon" mode="out-in">
              <component
                :is="isDark ? SunIcon : MoonIcon"
                :key="isDark ? 'sun' : 'moon'"
                class="w-4 h-4 text-light-blue"
              />
            </transition>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-show="isMenuOpen"
          class="sm:hidden mt-2 pb-4 space-y-2"
        >
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            @click="isMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
          >
            {{ link.name }}
          </router-link>
          
          <button
            @click="toggleDarkMode"
            class="w-full flex items-center justify-start px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <component
              :is="isDark ? SunIcon : MoonIcon"
              class="w-5 h-5 mr-2 text-light-blue"
            />
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import useDarkMode from '@/composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
]
</script>

<style scoped>
.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.icon-enter-from,
.icon-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.router-link-active {
  font-weight: 500;
}

@media (min-width: 640px) {
  li {
    transition: transform 0.2s ease;
  }
  li:hover {
    transform: translateY(-1px);
  }
}
</style>