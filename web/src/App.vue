<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <VanTabbar route>
    <VanTabbarItem icon="home-o" replace to="/">首页</VanTabbarItem>
    <VanTabbarItem icon="search" dot replace to="/course">课程</VanTabbarItem>
    <VanTabbarItem icon="friends-o" badge="5" replace to="/news">资讯</VanTabbarItem>
    <VanTabbarItem icon="setting-o" badge="20" replace to="/mine">我的</VanTabbarItem>
  </VanTabbar>
</template>
