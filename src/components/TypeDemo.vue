<script setup lang="ts">
import type {User, Users} from "@/types";

let user: User = {id: 1, name: "xiaoming", age: 8}

let userList: Array<User> = [user, {id: 2, name: "小红", age: 9}]

let users: Users = [user, {id: 2, name: "小红", age: 9}]

</script>

<template>

</template>

<style scoped>

</style>