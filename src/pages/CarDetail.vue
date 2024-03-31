<script setup lang="ts">
import {useRoute} from "vue-router";

let route = useRoute();

</script>

<template>
  <span>{{ route.query.id }}</span>
  <br>
  <span>{{ route.query.name }}</span>
  <br>
  <span>{{ route.query.content }}</span>
</template>

<style scoped>

</style>