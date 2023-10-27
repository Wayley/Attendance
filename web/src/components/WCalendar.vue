<script setup lang="ts">
import { ref } from 'vue'
import type {
  CalendarType,
  CalendarProps,
  CalendarDayItem,
  CalendarDayType,
  CalendarInstance
} from 'vant'
const props = { ...CalendarProps, msg: string }
defineProps<props>()

const calendarRef = ref<CalendarInstance>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
