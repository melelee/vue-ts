<script setup lang="ts">
import {reactive, watch} from "vue";

let user = reactive({
  id: 1,
  name: "张三",
  hometown: {
    province: "甘肃",
    city: "兰州"
  }
})

function changeName() {
  user.name = "李四"
  console.log(user)
  console.log(user.hometown)
  console.log(user.hometown.province)
}

function changeId() {
  user.id = Math.random() * 100
}

function changeUser() {
  // reactive包裹的对象不能直接赋值
  Object.assign(user, {id: 2, name: "王五"})
}

watch(user, (value, oldValue, onCleanup) => {
  console.log(value)
  console.log(oldValue)
  console.log(onCleanup)
})

// 只监视user.name
watch(() => user.name, (value, oldValue, onCleanup) => {
  console.log(value)
  console.log(oldValue)
  console.log(onCleanup)
})
</script>

<template>
  <span>用户id：{{ user.id }}</span>
  <span>用户名：{{ user.name }}</span>
  <br>
  <button @click="changeName">修改用户名</button>
  <button @click="changeId">修改用户ID</button>
  <button @click="changeUser">修改用户</button>

</template>

<style scoped>

</style>
