<script setup lang="ts">
import {useRoute} from "vue-router";

let route = useRoute();
</script>

<template>
  {{ route.params.id }}
  {{ route.params.title }}
  {{ route.params.content }}
</template>

<style scoped>

</style>