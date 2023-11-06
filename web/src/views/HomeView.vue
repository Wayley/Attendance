<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRecordFetch } from '../services/record'

const minDate: Date = new Date(2023, 1, 1)
const currentDate: Date = new Date()
const remarkCalendar: CalendarInstance = ref(null)

const { data } = useRecordFetch('/').json()
const dataTree = computed(() => format(data.value))

onMounted(() => {
  remarkCalendar?.value.scrollToDate(new Date()) // 默认显示当前
})

function format(data) {
  let result = {}
  if (data) {
    data.forEach((item) => {
      const { dateTime } = item
      const [date] = dateTime.split(' ')
      if (Object.hasOwn(result, date)) {
        result[date].push(item)
      } else {
        result[date] = [item]
      }
    })
  }
  return result
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
      <template #bottom-info="{ date }">
        <template v-if="Object.hasOwn(dataTree, date.toLocaleDateString())">
          <template v-for="(list, key) in dataTree">
            <div v-if="date.toLocaleDateString() == key" :key="key">
              <div
                v-for="({ type, status }, key) in list"
                :key="key"
                :class="[
                  'dot',
                  {
                    'dot-green': type == 10,
                    'dot-yellowgreen': type == 20,
                    'text-through': status == 1
                  }
                ]"
              >
                {{ type == 10 ? '感统' : '全脑' }}
              </div>
            </div>
          </template>
        </template>
      </template>
    </VanCalendar>
    <VanButton class="punching-btn" type="primary" block @click="$router.push('/course')">
      打卡
    </VanButton>
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

.dot-yellowgreen::before {
  background-color: yellowgreen;
}

.text-through {
  text-decoration: line-through;
}
</style>
