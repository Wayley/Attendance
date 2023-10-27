<script setup lang="ts">
import { ref } from 'vue'

const dateTime = ref('')
const showCalendar = ref(false)
const showTimePicker = ref(false)
let dates = [new Date('2023-10-26'), new Date('2023-10-27')]

const onCalendarConfirm = (value) => {
  // dateTime.value = ''
  // showCalendar.value = false
  // dateTime.value += `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
  // showTimePicker.value = true
  console.log(value, value[0], value[1].toLocaleString())
  dates.push(value)
  d = value
}
const onTimePickerConfirm = ({ selectedValues }) => {
  showTimePicker.value = false
  dateTime.value += ` ${selectedValues.join(':')}`
}

const formatter = (day: Day) => {
  const month = day.date.getMonth() + 1
  const date = day.date.getDate()

  if (month === 10) {
    if (date === 26) {
      console.log(1111111, day)
    } else if (date === 27) {
      console.log(22222, day)
    }
  }

  return day
}
</script>
<template>
  <div class="home-page">
    <VanCalendar
      title="日历"
      type="multiple"
      style="height: 70vh"
      :poppable="false"
      :show-confirm="false"
      :default-date="dates"
      :formatter="formatter"
      :min-date="new Date('2020-1-1')"
    />
    <h1>{{ dateTime }}</h1>
    <div class="punching-btn">
      <VanButton type="primary" block @click="showCalendar = true">打卡</VanButton>
    </div>
    <VanCalendar v-model:show="showCalendar" @confirm="onCalendarConfirm" />
    <VanPopup v-model:show="showTimePicker" round position="bottom" style="height: 50%">
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
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
