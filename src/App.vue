<script setup lang="ts">
</script>

<template>
  <div class="header">
    <router-link to="/computed" active-class="active">计算属性</router-link>
    <router-link to="/dog" active-class="active">自定义hook</router-link>
    <router-link to="/hello" active-class="active">HelloWord</router-link>
    <router-link to="/ref" active-class="active">RefDemo</router-link>
    <router-link to="/type" active-class="active">TypeDemo</router-link>
    <router-link to="/user" active-class="active">props</router-link>
    <router-link to="/watch" active-class="active">watch</router-link>
    <router-link to="/watch-reactive" active-class="active">watch-reactive</router-link>
    <router-link :to="{path: '/news'}" active-class="active">多级路由</router-link>

  </div>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<style scoped>

.header, .body {
  width: 80%;
  height: 100%;
  border: green double 2px;
  margin: auto;
}

a {
  margin-left: 10px;
}

.active {
  background-color: blue;
}
</style>
