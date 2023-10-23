<script setup>
import Form from '../Form.vue'
import Hero from './Hero.vue'
</script>

<template>
  <main class="flex-1 flex flex-col items-center justify-center bg-[url('./cats-dogs-home.jpeg')] bg-cover relative">
    <Hero />
    <Form />
  </main>
</template>

<style scoped>
/* Aplica la capa de superposición negra directamente al selector principal */
main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2); 
  z-index: 1; 
}


</style>
