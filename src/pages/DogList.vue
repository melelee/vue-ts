<script setup lang="ts">

import dog from "@/hooks/dog";

const {dogList, getDog} = dog();


</script>

<template>
  <img v-for="(dog,index) in dogList" :key="index" :src="dog" alt="">
  <br>
  <button v-on:click="getDog">加一只</button>
</template>

<style scoped>
img {
  height: 100px;
  padding: 10px;
}

</style>