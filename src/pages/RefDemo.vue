<script setup lang="ts">
import {ref} from "vue";

let refName = ref()

function showLog() {
  console.log("ref测试输出", refName.value)
}

defineExpose({
  refName: refName
})
</script>

<template>
  <h1 ref="refName">ref测试</h1>
  <button @click="showLog">输出日志</button>
</template>

<style scoped>

</style>
