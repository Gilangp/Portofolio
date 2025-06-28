import { ref, onMounted, watch } from 'vue'

export default function useDarkMode() {
  const isDark = ref(false)

  const setDarkMode = (enabled) => {
    document.documentElement.classList.toggle('dark', enabled)
    localStorage.setItem('theme', enabled ? 'dark' : 'light')
    isDark.value = enabled
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDark.value)
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(savedTheme ? savedTheme === 'dark' : systemPrefersDark)
  })


  watch(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    (isSystemDark) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(isSystemDark)
      }
    }
  )

  return { isDark, toggleDarkMode }
}