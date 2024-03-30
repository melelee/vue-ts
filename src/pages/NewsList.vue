<script setup lang="ts">
import {reactive} from "vue";

let newsList = reactive([
  {id: 1, title: "111", content: "111111"},
  {id: 2, title: "222", content: "222222"},
  {id: 3, title: "333", content: "333333"}
])

</script>

<template>
  <li v-for="news in newsList" :key="news.id">
    <router-link to="/news/detail">{{ news.title }}</router-link>
  </li>
  <div>
    <router-view></router-view>
  </div>

</template>

<style scoped>

</style>