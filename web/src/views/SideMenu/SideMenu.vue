<template>
  <div class="side-menu">
    <VanIcon name="list-switch" size="30px" />
    {{ width }}
  </div>
  <!-- <VanTabbar route>
    <VanTabbarItem icon="home-o" replace to="/">首页</VanTabbarItem>
    <VanTabbarItem icon="search" dot replace to="/course">课程</VanTabbarItem>
    <VanTabbarItem icon="friends-o" badge="5" replace to="/news">资讯</VanTabbarItem>
    <VanTabbarItem icon="setting-o" badge="20" replace to="/mine">我的</VanTabbarItem>
  </VanTabbar> -->
</template>
<style scoped>
.side-menu {
  position: fixed;
  width: 200px;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #ccc;
  opacity: 0.5;
}
</style>
