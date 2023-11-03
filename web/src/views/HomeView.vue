<script setup lang="ts">
import { ref, onMounted } from 'vue'
const minDate: Date = new Date(2020, 1, 1)
const currentDate: Date = new Date()

const showCalendar: boolean = ref(false)
const showTimePicker: boolean = ref(false)
const tempDateTime: string = ref('')
const remarkCalendar = ref(null)

let dates: date[] = ref([
  new Date('2023/10/23 11:00:00'),
  new Date('2023/10/23 15:30:00'),
  new Date('2023/10/24 15:30:00'),
  new Date('2023/10/27 15:30:00')
])

onMounted(() => {
  // 默认显示当前
  remarkCalendar.value.scrollToDate(new Date())
})

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
function isSelected(day: Day) {
  let d = day.date.getDate()
  let m = day.date.getMonth() + 1
  return m == 10 && [24, 27, 23].indexOf(d) > -1
}
</script>
<template>
  <div class="home-page">
    <VanCalendar
      class="remark-calendar record-calender"
      ref="remarkCalendar"
      title="日历"
      type="multiple"
      :poppable="false"
      :show-confirm="false"
      :min-date="minDate"
      :max-date="currentDate"
      :default-date="null"
      :formatter="(day) => ({ ...day, type: 'disabled' })"
    >
      <template #bottom-info="day">
        <template v-if="isSelected(day)">
          <div v-if="day.date.getDate() == 23">
            <div class="dot dot-green">感统</div>
            <div class="dot dot-red text-through">全脑</div>
            <div class="dot dot-green">感统</div>
          </div>

          <div v-if="day.date.getDate() == 24">
            <div class="dot dot-red" />
            <div class="dot dot-green" />
          </div>

          <div v-if="day.date.getDate() == 27">
            <div class="dot dot-red" />
          </div>
        </template>
      </template>
    </VanCalendar>
    <VanButton class="punching-btn" type="primary" block @click="showCalendar = true">
      开始
    </VanButton>
    <VanCalendar
      :show="showCalendar"
      :min-date="minDate"
      :max-date="currentDate"
      @confirm="onCalendarConfirm"
    />
    <VanPopup :show="showTimePicker" round position="bottom" style="height: 50%">
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

.record-calender {
  height: 70vh;
}

.dot {
  color: #000;
  font-size: 12px;
}

.dot::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 5px;
}

.dot-green::before {
  background-color: green;
}

.dot-red::before {
  background-color: red;
}

.text-through {
  text-decoration: line-through;
}
</style>
