<script setup lang="ts">
import {reactive} from "vue";

let cars = reactive([{id: 1, name: "小米su7", content: "干翻友商"},
  {id: 2, name: "高合", content: "遥遥领先"}])

</script>

<template>

  <ul>
    <li v-for="car in cars" :key="car.id">
      <router-link :to="{
        name: 'car-detail',
        params: car
      }" active-class="active">{{ car.name }}</router-link>
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