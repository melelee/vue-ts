<script setup lang="ts">
let props = defineProps(["desc", "user"]);
console.log(props)
console.log(props.desc)
console.log(props.user)
</script>

<template>
  <span>desc:{{ desc }}</span>
  <br>
  <span>用户id：{{ props.user.id }}</span>
  <span>用户名：{{ props.user.name }}</span>
  <span>用户年龄：{{ props.user.age }}</span>

</template>

<style scoped>

</style>