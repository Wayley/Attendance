<script setup lang="ts">
import { ref } from 'vue'
const minDate: Date = new Date(2020, 1, 1)
const showCalendar: boolean = ref(false)
const showTimePicker: boolean = ref(false)
let tempDateTime: string = ref('')
let dates: date[] = ref([
  new Date('2023/10/23 11:00:00'),
  new Date('2023/10/23 15:30:00'),
  new Date('2023/10/24 15:30:00'),
  new Date('2023/10/27 15:30:00')
])

const onCalendarConfirm = (date: Date) => {
  showCalendar.value = false
  showTimePicker.value = true
  tempDateTime.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
const onTimePickerConfirm = ({ selectedValues }) => {
  showTimePicker.value = false
  tempDateTime.value += ` ${selectedValues.join(':')}`

  const preDates = [...dates.value, new Date(tempDateTime.value)]
  dates.value = preDates
}
const formatter = (day: Day) => {
  if (
    day.type.indexOf('selected') > -1 ||
    day.type.indexOf('start') > -1 ||
    day.type.indexOf('end') > -1
  ) {
    console.log(1111111, day.type)
  } else {
    day.type = 'disabled' // middle
  }
  return day
}
function select(v) {
  console.log('select', v)
}
function unselect(v) {
  console.log('unselect', v)
  return false
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
      :formatter="formatter"
      :min-date="minDate"
      :max-date="new Date()"
      :default-date="dates"
      @select="select"
      @unselect="unselect"
    />
    <div class="punching-btn">
      <VanButton type="primary" block @click="showCalendar = true">打卡</VanButton>
    </div>
    <VanCalendar
      v-model:show="showCalendar"
      @confirm="onCalendarConfirm"
      :min-date="minDate"
      :max-date="new Date()"
    />
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
