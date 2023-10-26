<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useThemeStore, Theme } from '../../stores/theme.ts'
import darkIcon from '../../assets/images/dark_icon.svg'
import lightIcon from '../../assets/images/light_icon.svg'

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>
<template>
  <div class="header" :class="{ dark: checked }">
    <VanRow justify="space-between" align="center" style="height: 100%">
      <VanCol span="6"><div>log</div></VanCol>
      <VanCol span="12">
        <div>Header Nav -{{ theme }}</div>
      </VanCol>
      <VanCol span="6">
        <VanRow align="center">
          <VanCol span="12">
            <van-switch
              v-model="theme"
              :active-value="Theme.Dark"
              :inactive-value="Theme.Light"
              @change="themeStore.switchTheme"
            >
              <template #node>
                <van-icon :name="theme == Theme.Dark ? darkIcon : lightIcon" />
              </template>
            </van-switch>
          </VanCol>
        </VanRow>
      </VanCol>
    </VanRow>
  </div>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background);
}
</style>
