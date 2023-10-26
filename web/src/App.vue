<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useViewportWidthStore } from 'wing-vue-viewport'
import { storeToRefs } from 'pinia'
import FooterMenu from './views/FooterMenu/FooterMenu.vue'
import SideMenu from './views/SideMenu/SideMenu.vue'
import HeaderNav from './views/Header/HeaderNav.vue'
import { useThemeStore } from './stores/theme.ts'

const viewportWidthStore = useViewportWidthStore()
const { isLargeViewPort, isMobile } = storeToRefs(viewportWidthStore)

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<template>
  <VanConfigProvider :theme="theme">
    <div
      :class="{
        'main-for-footermenu': isMobile,
        'main scrollbar': !isMobile,
        'main-for-sidermenu': !isLargeViewPort,
        'main-for-header': isLargeViewPort
      }"
    >
      <FooterMenu v-if="isMobile" />
      <template v-else>
        <HeaderNav v-if="isLargeViewPort" />
        <SideMenu v-else />
        <VanBackTop />
      </template>
      <div class="section">
        <RouterView />
      </div>
    </div>
  </VanConfigProvider>
</template>
<style scoped>
.main {
  overflow: auto;
  height: 100vh;
}
.main-for-footermenu {
  padding-bottom: 50px;
}
.main-for-sidermenu {
}
.main-for-header {
  padding-top: 50px;
}
</style>
