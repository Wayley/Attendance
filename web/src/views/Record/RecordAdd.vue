<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRecordFetch } from '@/services/record'
import { minDate, getNow } from '@/config'

const router = useRouter()
/* **************************** Type **************************** */
const type = ref([10])
const typeName = computed(() => recordTypes.find((o) => o.value == type.value[0])?.text)
const showTypePicker = ref(false)
const recordTypes = [
  { text: '感统', value: 10 },
  { text: '全脑', value: 20 }
]

/* **************************** Date **************************** */
const { year, month, day, hours, minutes, seconds } = getNow()
const dates = ref([year, month, day])
const date = computed(() => dates.value.join('/'))
const showDatePicker = ref(false)

/* **************************** Time **************************** */
const times = ref([hours, minutes, seconds])
const time = computed(() => times.value.join(':'))
const showTimePicker = ref(false)

const onSubmit = (values) => {
  console.log('submit', values, { ...values, type: type.value[0] })

  // const { data } = useRecordFetch('/')
  //   .post({ ...values, type: type.value[0] })
  //   .json()
  // if (data) router.back()
}
</script>
<template>
  <div>
    <VanNavBar title="新增记录" left-text="返回" left-arrow @click-left="() => $router.back()" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          name="type"
          v-model="typeName"
          is-link
          readonly
          label="类型"
          placeholder="点击选择类型"
          @click="showTypePicker = true"
        />
        <van-popup :show="showTypePicker" position="bottom" @click-overlay="showTypePicker = false">
          <van-picker v-model="type" :columns="recordTypes" :show-toolbar="false" />
        </van-popup>

        <van-field
          name="date"
          v-model="date"
          is-link
          readonly
          label="日期"
          placeholder="点击选择日期"
          @click="showDatePicker = true"
        />
        <van-popup :show="showDatePicker" position="bottom" @click-overlay="showDatePicker = false">
          <van-date-picker
            v-model="dates"
            :min-date="minDate"
            :max-date="new Date()"
            :show-toolbar="false"
          />
        </van-popup>

        <van-field
          v-model="time"
          name="time"
          is-link
          readonly
          label="时间"
          placeholder="点击选择时间"
          @click="showTimePicker = true"
        />
        <van-popup :show="showTimePicker" position="bottom" @click-overlay="showTimePicker = false">
          <van-time-picker
            v-model="times"
            :show-toolbar="false"
            :columns-type="['hour', 'minute', 'second']"
          />
        </van-popup>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>
