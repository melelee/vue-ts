<script setup lang="ts">
import {computed, ref} from "vue";

let firstNum = ref(0)
let secondNum = ref(0)

let result = computed(() => {
  console.log(1)
  return firstNum.value - secondNum.value
})
</script>

<template>
  <input type="number" v-model="firstNum" placeholder="请输入第一个数字">
  <input type="number" v-model="secondNum" placeholder="请输入第二个数字">
  <span>计算结果：{{ result }}</span>
  <span>计算结果：{{ result }}</span>
  <span>计算结果：{{ result }}</span>
  <span>计算结果：{{ result }}</span>

</template>

<style scoped>

</style>