<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
  
<template>
  <div class="p-4 max-w-[880px]">
    <div class="w-full flex flex-col">
      <label for="">Pets</label>
      <div class="flex w-1/2 justify-evenly">
        <div class="rounded w-1/2 h-auto flex flex-col border-[1px] border-[#DBDDB] border-solid px-1">
        <font-awesome-icon icon="user-secret" />
        <font-awesome-icon icon="fa-solid fa-dog" />
        Dog
        </div>
        <div class="rounded w-1/2 h-auto flex flex-col border-[1px] border-[#DBDDB] border-solid px-1">
        <font-awesome-icon icon="fa-solid fa-cat" />
        Cat
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
