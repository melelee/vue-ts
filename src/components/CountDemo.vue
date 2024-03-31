<script setup lang="ts">
import {ref} from "vue";


let sum = ref(0);
let value = ref(1);


function add() {
  sum.value += value.value
}

function subtract() {
  sum.value -= value.value
}

</script>

<template>
  <div class="count">

    <select name="selectName" id="selectId" v-model.number="value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br>

    <button @click="add">加</button>
    <button @click="subtract">减</button>
    <br>
    <span>结果是：{{ sum }}</span>
  </div>
</template>

<style scoped>
.count {
  background-color: green;
  height: 100px;
}
</style>