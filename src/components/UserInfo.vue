<script setup lang="ts">
import type {User, Users} from "@/types";


//仅接收
// let props = defineProps(["desc", "user"]);


//接收，限制传入值类型，并用？添加可选
// const props = defineProps<{
//   desc?: string,
//   user: User
// }>()

//接收，限制传入值类型，并用？添加可选，并添加默认
withDefaults(
    defineProps<{
      desc?: string,
      user?: User
    }>(),
    {
      desc: "我是用户详情",
      user: () => {
        return {id: 1, name: "wangwu", age: 10}
      }
    }
)

</script>

<template>
  <h2>{{ desc }}</h2>

  <div>{{ user }}</div>

</template>

<style scoped></style>
