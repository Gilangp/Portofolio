<script setup>
import { ref, onMounted } from 'vue'

const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark', darkMode.value)
}
</script>

<template>
  <div :class="{ 'dark': darkMode }">
    <div class="min-h-screen bg-gray-50 dark:bg-dark">
      <NavBar @toggle-dark="toggleDarkMode" />
      <router-view />
    </div>
  </div>
</template>