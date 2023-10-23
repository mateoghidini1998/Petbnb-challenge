<script setup>
import Header from './components/UI/Header.vue'
import Main from './components/UI/Main.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <Header />
    <Main class="flex-1" />
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
