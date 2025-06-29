<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-light-gray/70 dark:bg-gray-900/80 backdrop-blur-md py-2 transition-all duration-300 border-b border-gray-300 dark:border-gray-700 shadow-sm"
    :class="{ 
      'bg-light-gray/95 dark:bg-dark-blue shadow-sm': isScrolled,
      'overflow-hidden': isMenuOpen 
    }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-10">
        <!-- Logo -->
        <a
          href="#home"
          @click.prevent="scrollTo('home')"
          class="flex items-center text-xl font-bold text-gray-900 dark:text-white hover:text-light-blue transition-colors duration-200"
          :class="{ '!text-light-blue': activeSection === 'home' }"
          aria-label="Home"
        >
          <span class="text-light-blue">G</span>
          <span class="text-gray-900 dark:text-white">ilangprnm</span>
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="sm:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-1 focus:ring-light-blue/50"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle menu"
        >
          <transition name="icon" mode="out-in">
            <component
              :is="isMenuOpen ? XMarkIcon : Bars3Icon"
              class="w-6 h-6"
            />
          </transition>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden sm:flex items-center gap-2 sm:gap-4">
          <ul class="flex space-x-2 sm:space-x-4">
            <li v-for="link in navLinks" :key="link.id">
              <a
                :href="`#${link.id}`"
                @click.prevent="scrollTo(link.id)"
                class="relative px-2 py-1 text-xs sm:text-sm font-medium transition-colors duration-200"
                :class="{
                  'text-gray-900 dark:text-white': activeSection === link.id,
                  'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white': activeSection !== link.id
                }"
              >
                {{ link.name }}
                <span
                  v-if="activeSection === link.id"
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-light-blue rounded-full"
                ></span>
              </a>
            </li>
          </ul>

          <button
            @click="toggleDarkMode"
            class="w-8 h-8 flex items-center justify-center rounded-full border-2 border-light-blue hover:bg-light-blue/10 dark:hover:bg-light-blue/20 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-light-blue/50"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          >
            <transition name="icon" mode="out-in">
              <component
                :is="isDark ? SunIcon : MoonIcon"
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
          @keydown.esc="isMenuOpen = false"
        >
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            @click.prevent="() => { scrollTo(link.id); closeMenu(); }"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            :class="{
              'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800': activeSection === link.id,
              'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800': activeSection !== link.id
            }"
          >
            {{ link.name }}
          </a>
          
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import useDarkMode from '@/composables/useDarkMode'
import { debounce } from 'lodash-es'

const { isDark, toggleDarkMode } = useDarkMode()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('home')

const navLinks = computed(() => [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'contact', name: 'Contact' }
])

const scrollTo = (id) => {
  activeSection.value = id
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = debounce(() => {
  isScrolled.value = window.scrollY > 10
  
  // Update active section on scroll
  const scrollPos = window.scrollY + 100
  navLinks.value.forEach(link => {
    const section = document.getElementById(link.id)
    if (section) {
      const offsetTop = section.offsetTop
      const offsetBottom = offsetTop + section.offsetHeight
      if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
        activeSection.value = link.id
      }
    }
  })
}, 100)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Styles tetap sama seperti sebelumnya */
</style>