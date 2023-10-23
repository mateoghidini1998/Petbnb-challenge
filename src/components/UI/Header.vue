<script setup>
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'
</script>

<template>
  <header class="header bg-[#519B7A] flex justify-between text-white items-center  ">
    <div class="flex justify-between w-screen items-center px-16 py-[5px] ">
        <div class="logo">
        <Logo/>
        </div>
        <Navigation/>
    </div>
  </header>
</template>

<style scoped>
.logo img {
  max-width: 100px;
  height: auto;
}

</style>
