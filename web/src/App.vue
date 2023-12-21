<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useThemeStore } from './stores/theme.ts'

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<template>
  <VanConfigProvider :theme="theme">
    <RouterView />
  </VanConfigProvider>
</template>
<style scoped></style>
