<script setup>
// import { ref, computed, shallowRef, toRaw } from 'vue'

import { useRecordFetch } from '@/services/record'

const { data } = useRecordFetch('/').json()

console.log(data)
console.log('record page', data, data.value)
</script>
<template>
  <ul>
    <li v-for="item in data" v-bind:key="item.id">{{ item.type }}: {{ item.dateTime }}</li>
  </ul>
</template>
