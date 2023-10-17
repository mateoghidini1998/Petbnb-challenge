<template>
  <div class="rounded w-1/2 max-w-[195px] h-[90px]  border-[1px] border-[#DBDDB] border-solid px-1"
  :class="buttonClass"
  >
    <button 
    class="flex flex-col items-center justify-center w-full h-full p-2.5"
    @click="toggleColors"
    >
      <font-awesome-icon :icon="icon" class="text-[25px]" />
      <p class="text-sm">{{ label }}</p>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    label: String,
  },
  data() {
    return {
      inverted: false
    };
  },
  computed: {
    buttonClass() {
      return {
        'bg-[#519B7A] text-white': this.inverted,
        'bg-white text-[#519B7A]': !this.inverted
      };
    }
  },
  methods: {
    toggleColors() {
      this.inverted = !this.inverted;
    }
  }
};
</script>