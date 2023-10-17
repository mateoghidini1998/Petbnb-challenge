<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
  
<template>
  <div class="p-4 w-[880px] bg-white rounded">
    <div class="w-full flex flex-col">
      <label for="">Pets</label>
      <div class="flex w-1/2 justify-between">
        <div class="rounded w-1/2 max-w-[195px] h-[90px]  border-[1px] border-[#DBDDB] border-solid px-1 text-[#519B7A]">
          <button class="flex flex-col items-center justify-center w-full h-full p-2.5">
            <font-awesome-icon icon="fa-solid fa-dog" class="text-[25px]" />
            <p class="text-sm">Dog</p>
          </button>
        </div>
        <div class="rounded w-1/2 max-w-[195px] h-[90px] border-[1px] border-[#DBDDB] border-solid px-1 text-white bg-[#519B7A]">
          <button class="flex flex-col items-center justify-center w-full h-full p-2.5">
            <font-awesome-icon icon="fa-solid fa-cat" class="text-[25px]" />
            <p class="text-sm">Cat</p>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <label for="">At the babysitter's house</label>
      <div class="flex w-full" >
        <div class="flex w-1/2 justify-evenly">
          <div class="rounded w-1/2 max-w-[195px] h-[90px]  border-[1px] border-[#DBDDB] border-solid px-1 text-[#519B7A]">
            <button class="flex flex-col items-center justify-center w-full h-full p-2.5">
              <font-awesome-icon icon="fa-solid fa-suitcase" class="text-[25px]" />
              <p class="text-sm">Staying</p>
            </button>
          </div>
          <div class="rounded w-1/2 max-w-[195px] h-[90px] border-[1px] border-[#DBDDB] border-solid px-1 text-white bg-[#519B7A]">
            <button class="flex flex-col items-center justify-center w-full h-full p-2.5">
              <font-awesome-icon icon="fa-solid fa-sun" class="text-[25px]" />
              <p class="text-sm">Day care</p>
            </button>
          </div>
        </div>
        <div class="flex w-1/2 justify-evenly">
          <div class="rounded w-1/3 max-w-[195px] h-[90px]  border-[1px] border-[#DBDDB] border-solid px-1 text-[#519B7A]">
            <button class="flex flex-col items-center justify-center w-full h-full p-2.5">
              <font-awesome-icon icon="fa-solid fa-home" class="text-[25px]" />
              <p class="text-sm">The babysitter at home</p>
            </button>
          </div>
          <div class="rounded w-1/3 max-w-[195px] h-[90px] border-[1px] border-[#DBDDB] border-solid px-1 text-white bg-[#519B7A]">
            <button class="flex flex-col items-center justify-center w-full h-full p-2.5">
              <font-awesome-icon icon="fa-solid fa-cat" class="text-[25px]" />
              <p class="text-sm">Exhaust service</p>
            </button>
          </div>
          <div class="rounded w-1/3 max-w-[195px] h-[90px] border-[1px] border-[#DBDDB] border-solid px-1 text-white bg-[#519B7A]">
            <button class="flex flex-col items-center justify-center w-full h-full p-2.5">
              <font-awesome-icon icon="fa-solid fa-key" class="text-[25px]" />
              <p class="text-sm">Pet sitter</p>
            </button>
          </div>
        </div>
      </div>
        <div class="w-full flex flex-col">
          <label for="">Staying near</label>
          <div class="flex h-[60px]">
            <div class="w-1/2 rounded border-[1px] border-[#DBDDB] border-solid">
              <input type="text" class="h-full w-full">
            </div>
            <div class="w-1/3 rounded border-[1px] border-[#DBDDB] border-solid">
              <input type="text" class="h-full w-full">
            </div>
            <button class="flex-1 rounded bg-[#E5573F]">
              <font-awesome-icon icon="fa-solid fa-search" class="text-[25px] text-white" />
            </button>
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
