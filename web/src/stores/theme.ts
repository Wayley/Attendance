import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export const useThemeStore = defineStore('theme', () => {
  const theme: Ref<Theme> = ref(Theme.Light)

  function switchTheme(newTheme: Theme) {
    document.documentElement.classList.remove(`wing-theme-${theme.value}`)
    document.documentElement.classList.add(`wing-theme-${newTheme}`)
    theme.value = newTheme
  }

  return { theme, switchTheme }
})

export default useThemeStore
