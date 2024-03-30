<script setup lang="ts">
import {useRoute} from "vue-router";

let route = useRoute();
</script>

<template>
  {{ route.query.title }}
</template>

<style scoped>

</style>