<script setup>
import OptionButton from './OptionButton.vue'
</script>


<template>
  <div class="p-4 w-[880px] bg-white rounded">
    <div class="w-full flex flex-col">
      <label for="">Pets</label>
      <div class="flex w-1/2 justify-between">
        <OptionButton icon="fa-solid fa-dog" label="Dog" />
        <OptionButton icon="fa-solid fa-cat" label="Cat" />
      </div>
    </div>
    <div class="w-full flex flex-col">
      <label for="">At the babysitter's house</label>
      <div class="flex w-full" >
        <div class="flex w-1/2 justify-between">
          <OptionButton icon="fa-solid fa-suitcase" label="Staying" />
          <OptionButton icon="fa-solid fa-sun" label="Day care" />
        </div>
        <div class="flex w-1/2 justify-evenly">
          <OptionButton icon="fa-solid fa-home" label="The babysitter at home" />
          <OptionButton icon="fa-solid fa-paw" label="Exhaust service" />
          <OptionButton icon="fa-solid fa-key" label="Pet sitter" />  
        </div>
      </div>
        <div class="w-full flex flex-col">
          <label for="">Staying near</label>
          <div class="flex h-[60px]">
            <div class="w-1/2 rounded border-[1px] border-[#DBDDB] border-solid">
              <input type="text" class="h-full w-full">
            </div>
            <div class="w-1/3 rounded border-[1px] border-[#DBDDB] border-solid">
              <input type="date" class="h-full w-full">
            </div>
            <button class="flex-1 rounded bg-[#E5573F]">
              <font-awesome-icon icon="fa-solid fa-search" class="text-[25px] text-white" />
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
    OptionButton,
  },

}
</script>