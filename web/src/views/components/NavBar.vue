<script setup lang="ts">
import { computed } from 'vue'
import { useRecordFetch } from '@/services/record'

const { data } = useRecordFetch('/').json()
const len = computed(() => (data.value ? data.value.length : ''))
</script>
<template>
  <VanTabbar route>
    <VanTabbarItem icon="home-o" replace to="/">首页</VanTabbarItem>
    <VanTabbarItem icon="search" dot replace to="/course">课程</VanTabbarItem>
    <VanTabbarItem icon="friends-o" :badge="len" replace to="/news">资讯</VanTabbarItem>
    <VanTabbarItem icon="setting-o" badge="20" replace to="/mine">我的</VanTabbarItem>
  </VanTabbar>
</template>
