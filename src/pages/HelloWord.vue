<template>
  <div :class="className">{{ message }}</div>
  <hr>
  <div>
    <span>姓名:{{ user.name }}</span>
    <br>
    <span>年龄:{{ user.age }}</span>
  </div>
  <hr>

  <div v-if="condition">v-if测试</div>
  <div v-show="condition">v-show测试</div>

  <hr>

  <button @click="change">更改属性</button>
  <button v-on:click="change">我也是可以更改的</button>
  <hr>

  <li v-for="item in userList" :key="item.id">
    {{ item.name }}
  </li>
  <hr>

  <span>你的输入是：{{ content }}</span>
  <br>
  <input type="text" v-model="content" placeholder="请输入内容">
  <hr>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

let message = ref("hello vue3")
let className = ref("green")
let user = reactive({
  name: "zhangsan",
  age: 1
})

let userList = reactive([{id: 1, name: "lisi"}, {id: 2, name: "wangwu"}])

let condition = ref(true)

function change() {
  className.value = "blue"
  condition.value = !condition.value
}

let content = ref("")
</script>


<style scoped>
.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>