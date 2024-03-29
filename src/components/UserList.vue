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

let message = "我是用户列表"
</script>

<template>
  <UserInfo :desc="message" :user="usersReactive[0]"></UserInfo>

</template>

<style scoped>

</style>
