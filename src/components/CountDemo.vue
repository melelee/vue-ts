<script setup lang="ts">
import {ref} from "vue";
import {useCountDemoStore} from "@/store/CountDemo";
import {storeToRefs} from "pinia";

let countDemoStore = useCountDemoStore();

let {sum, bigSum} = storeToRefs(countDemoStore);

// let sum = ref(0);
let num = ref(1);


function add() {
  // 方法1
  // countDemoStore.sum += num.value;

  // 方法2
  // countDemoStore.$patch({
  //   sum: 888
  // })

  // 方法3
  countDemoStore.increase(num.value)
}

function subtract() {
  countDemoStore.sum -= num.value;
}

</script>

<template>
  <div class="count">

    <select name="selectName" id="selectId" v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br>

    <button @click="add">加</button>
    <button @click="subtract">减</button>
    <br>
    <span>结果是：{{ sum }}</span>
    <span>结果是：{{ bigSum }}</span>

  </div>
</template>

<style scoped>
.count {
  background-color: green;
  height: 100px;
}
</style>
