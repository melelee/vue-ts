<script setup lang="ts">
import {useRoute} from "vue-router";

//通过路由自行接受
// let route = useRoute();

defineProps(["id", "name", "content"])
</script>

<template>
<!--  通过路由自行接受-->
<!--  <span>{{ route.params.id }}</span>-->
<!--  <br>-->
<!--  <span>{{ route.params.name }}</span>-->
<!--  <br>-->
<!--  <span>{{ route.params.content }}</span>-->


  <span>{{ id }}</span>
  <br>
  <span>{{ name }}</span>
  <br>
  <span>{{ content }}</span>
</template>

<style scoped>

</style>