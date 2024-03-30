<script setup lang="ts">
import {reactive} from "vue";

let newsList = reactive([
  {id: 1, title: "111", content: "111111"},
  {id: 2, title: "222", content: "222222"},
  {id: 3, title: "333", content: "333333"}
])

</script>

<template>

  <h1>query传值</h1>
  <li v-for="news in newsList" :key="news.id">
    <router-link :to="`/news/detail?title=${news.title}`">第一种：{{ news.title }}</router-link>
  </li>

  <li v-for="news in newsList" :key="news.id">
    <router-link
        :to="{
          path:'/news/detail',
          query:{
            title:news.title
          }
        }"
    >
      第二种：{{ news.title }}
    </router-link>
  </li>

  <h1>param传值</h1>

  <div>
    <router-view></router-view>
  </div>

</template>

<style scoped>

</style>