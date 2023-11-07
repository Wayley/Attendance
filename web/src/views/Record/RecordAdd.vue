<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

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
const date = ref('')
const showDatePicker = ref(false)

/* **************************** Time **************************** */
const time = ref('')
const showTimePicker = ref(false)

const onSubmit = (values) => {
  console.log('submit', values, { ...values, type: type.value[0] })
  router.back()
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
        <van-popup :show="showTypePicker" position="bottom">
          <van-picker
            v-model="type"
            :columns="recordTypes"
            @confirm="
              ({ selectedValues }) => {
                type = selectedValues
                showTypePicker = false
              }
            "
            @cancel="showTypePicker = false"
          />
        </van-popup>

        <van-field
          v-model="date"
          name="date"
          is-link
          readonly
          label="日期"
          placeholder="点击选择日期"
          @click="showDatePicker = true"
        />
        <van-popup :show="showDatePicker" position="bottom">
          <van-date-picker
            @confirm="
              ({ selectedValues }) => {
                date = selectedValues.join('/')
                showDatePicker = false
              }
            "
            @cancel="showDatePicker = false"
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
        <van-popup :show="showTimePicker" position="bottom">
          <van-time-picker
            :columns-type="['hour', 'minute', 'second']"
            @confirm="
              ({ selectedValues }) => {
                time = selectedValues.join(':')
                showTimePicker = false
              }
            "
            @cancel="showTimePicker = false"
          />
        </van-popup>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>
