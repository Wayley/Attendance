<script setup>
import { storeToRefs } from 'pinia'
import { useViewportWidthStore } from 'wing-vue-viewport'
const viewportWidthStore = useViewportWidthStore()
const { isMobile, width, isMediumViewPort, isExtraLargeViewPort } = storeToRefs(viewportWidthStore)
</script>

<template>
  <h1>Home</h1>
  <h1>width --{{ width }}</h1>
  <h1>isMobile --{{ isMobile }}</h1>
  <h1>isMediumViewPort --{{ isMediumViewPort }}</h1>
  <h1>isExtraLargeViewPort --{{ isExtraLargeViewPort }}</h1>
</template>
