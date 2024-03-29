<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import { useRecordFetch } from '@/services/record'
import { minDate } from '@/config'
import { toLocaleDateString } from '@/util/DateTimeHelper'

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
      const { startTime } = item
      const [date] = startTime.split(' ')
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
  <div>
    <div class="wrapper-with-nav">
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
          <template v-if="Object.hasOwn(dataTree, toLocaleDateString(date))">
            <template v-for="(list, key) in dataTree">
              <div v-if="toLocaleDateString(date) == key" :key="key">
                <div
                  v-for="({ type, status }, key) in list"
                  :key="key"
                  :class="[
                    'dot',
                    {
                      'dot-green': type == 1,
                      'dot-yellowgreen': type == 2,
                      'text-through': status == 13
                    }
                  ]"
                >
                  {{ type == 1 ? '感统' : '全脑' }}
                </div>
              </div>
            </template>
          </template>
        </template>
      </VanCalendar>
      <VanButton
        class="punching-btn"
        type="primary"
        block
        @click="$router.push({ name: 'record.add' })"
      >
        打卡
      </VanButton>
    </div>
    <NavBar />
  </div>
</template>
<style scoped>
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

.punching-btn {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
