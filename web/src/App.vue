<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
import { Button } from 'vant'
</script>

<template>
  <RouterView />
  <div>
    <Button>111111</Button>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
