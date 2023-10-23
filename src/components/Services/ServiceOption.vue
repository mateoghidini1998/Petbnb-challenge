<template>
  <div class="rounded flex-1 max-w-1/2 h-[90px]  border-[1px] border-[#DBDDB] border-solid px-1 mr-2"
  :class="buttonClass"
  >
    <button 
    class="flex flex-col items-center justify-center w-full h-full p-2.5"
    @click="toggleColors"
    > 
    <font-awesome-icon :icon="icon" class="text-[25px]" />
    <p class="text-sm ">{{ label }}</p>
    </button>
  </div>
</template>

<script>
import { computed, } from 'vue';


export default {
  props: {
    icon: String,
    label: String,
    isSelected: Boolean
  },
  setup(props, { emit }) {

    //Dynamic classes por text and background color
    const buttonClass = computed(() => ({
      'bg-[#519B7A] text-white': props.isSelected,
      'bg-white text-[#519B7A]': !props.isSelected
    }));

    //Emit event on click to change colors
    const toggleColors = () => {
      emit('click', props.label);
    };

    return {
      buttonClass,
      toggleColors
    };
  }
};


</script>