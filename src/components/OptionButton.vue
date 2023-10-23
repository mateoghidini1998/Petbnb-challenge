<template>
  <div class="rounded flex-1 max-w-[195px] h-[90px] border-[1px] border-[#DBDDB] border-solid px-1 mr-2" :class="buttonClass">
    <button class="flex flex-col items-center justify-center w-full h-full p-2.5" @click="toggleColors">
      <font-awesome-icon :icon="icon" class="text-[25px]" />
      <p class="text-sm">{{ label }}</p>
    </button>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    icon: String,
    label: String,
    selectedPets: Array,
  },
  setup(props) {

    const inverted = computed(() => props.selectedPets.includes(props.label));

    const buttonClass = computed(() => ({
      'bg-[#519B7A] text-white': inverted.value,
      'bg-white text-[#519B7A]': !inverted.value
    }));


    const toggleColors = () => {
      inverted.value = !inverted.value;
    };

    return {
      buttonClass,
      toggleColors
    };
  }
};

</script>