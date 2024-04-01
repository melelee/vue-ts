<script setup lang="ts">
import {useLoveTalkStore} from "@/store/LoveTalk";
import {storeToRefs} from "pinia";


// let talks = reactive([{id: nanoid(), content: "别嫌弃我什么都不会，但是我只会娶你。"}]);
let loveTalkStore = useLoveTalkStore();

let {talks} = storeToRefs(loveTalkStore);


loveTalkStore.$subscribe((mutation, state) => {
  console.log("变了变了", mutation);
  console.log("变了变了", state);
  localStorage.setItem("talks", JSON.stringify(state.talks))
})

async function getTalk() {
  await loveTalkStore.addTalk()
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
