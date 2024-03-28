<script setup lang="ts">
import {ref, watch} from 'vue'

let number = ref(0)

let add = function () {
  number.value++
}

let square = ref(number.value * number.value)

let watch1 = watch(
    number,
    (value, oldValue) => {
      if (value > 10) {
        watch1()
      }
      square = value * oldValue
    },
    {
      // 深度监视
      deep: true,
      // 立即
      immediate: true,
      // 一次
      once: true
    }
);
</script>

<template>
  <div>平方是：{{ square }}</div>
  <input type="number" v-model="number" placeholder="请输入">
  <button v-on:click="add">加一</button>
</template>
