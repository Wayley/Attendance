<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <van-tabbar route>
    <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" dot replace to="/course">课程</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5" replace to="/news">资讯</van-tabbar-item>
    <van-tabbar-item icon="setting-o" badge="20" replace to="/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>
