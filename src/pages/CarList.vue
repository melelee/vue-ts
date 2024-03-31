<script setup lang="ts">
import {reactive} from "vue";
import type {Car} from "@/types";
import {useRouter} from "vue-router";

let cars = reactive([{id: 1, name: "小米su7", content: "干翻友商"},
  {id: 2, name: "高合", content: "遥遥领先"}])

let router = useRouter();

function showDetail(car: Car) {
  // 编程式路由跳转
  router.push({
    name: 'car-detail',
    params: {
      id: car.id,
      name: car.name,
      content: car.content
    }
  })
}
</script>

<template>

  <ul>
    <li v-for="car in cars" :key="car.id">
      <router-link replace :to="{
        name: 'car-detail',
        params: car
      }" active-class="active">{{ car.name }}
      </router-link>

      <button v-on:click="showDetail(car)">看这条新闻</button>
    </li>
  </ul>

  <div class="body">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.body {
  background-color: aquamarine;
}

.active {
  border-color: cadetblue;
}

</style>