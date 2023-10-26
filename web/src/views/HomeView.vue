<script setup lang="ts">
import { ref } from 'vue'

const dateTime = ref('')
const showCalendar = ref(false)
const showTimePicker = ref(false)

const onCalendarConfirm = (value) => {
  dateTime.value = ''
  showCalendar.value = false
  dateTime.value += `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
  showTimePicker.value = true
}
const onTimePickerConfirm = ({ selectedValues }) => {
  console.log(selectedValues)
  showTimePicker.value = false
  dateTime.value += ` ${selectedValues.join(':')}`
}
</script>
<template>
  <div class="home-page">
    <VanCalendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />
    <h1>{{ dateTime }}</h1>
    <div class="punching-btn">
      <VanButton type="primary" block @click="showCalendar = true">打卡</VanButton>
    </div>
    <VanCalendar v-model:show="showCalendar" @confirm="onCalendarConfirm" />
    <VanPopup v-model:show="showTimePicker" round position="bottom" :style="{ height: '50%' }">
      <VanTimePicker
        title="选择时间"
        :columns-type="['hour', 'minute', 'second']"
        @confirm="onTimePickerConfirm"
      />
    </VanPopup>
  </div>
</template>
<style scoped>
.punching-btn {
  width: 50%;
  margin: 50px auto;
}
</style>
