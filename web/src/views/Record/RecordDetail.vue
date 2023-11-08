<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div>
    <VanNavBar
      :title="`记录详细-${router.params.id}`"
      left-text="返回"
      left-arrow
      @click-left="() => $router.back()"
    />
    {{ router.params.id }}
  </div>
</template>
