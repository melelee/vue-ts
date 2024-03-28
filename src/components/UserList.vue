<script setup lang="ts">
import type {Users} from "@/types";
import {reactive} from "vue";
import UserInfo from "@/components/UserInfo.vue";

let uses: Users = [
  {id: 1, name: "xiaoming", age: 18},
  {id: 2, name: "xiaohong"}
]

let usersReactive = reactive<Users>([
  {id: 1, name: "xiaoming", age: 18},
  {id: 2, name: "xiaohong"}
])
</script>

<template>
  <h2>这里是用户列表</h2>
  <UserInfo desc="我是用户列表" :user="usersReactive[0]"></UserInfo>

</template>

<style scoped>

</style>