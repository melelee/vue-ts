<script setup lang="ts">
import {reactive} from "vue";
import axios from "axios";
import {nanoid} from "nanoid";


let talks = reactive([{id: nanoid(), content: "别嫌弃我什么都不会，但是我只会娶你。"}]);

async function getTalk() {
  // 两次结构赋值，并重命名
  let {data: {content: talkContent}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
  talks.push({
    id: nanoid(),
    content: talkContent
  });
}
</script>

<template>
  <div class="pinia">
    <button @click="getTalk">再来一个</button>
    <ul>
      <li v-for="talk in talks" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>

</template>

<style scoped>
.pinia {
  background-color: orange;
}
</style>