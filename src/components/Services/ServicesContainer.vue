<script setup>
import ServiceOption from './ServiceOption.vue'
</script>

<template>
  <div class="grid" :class="['mb-[20px]', occupyFullWidth]">
    <div class="grid grid-rows-[30px_1fr] mr-4" v-if="selectedPets.includes('Dog')">
      <label for="" class="px-[5px]" >At the babysitter's house</label>
      <div class="grid grid-cols-2">
        <ServiceOption
          icon="fa-solid fa-suitcase"
          label="Staying"
          :isSelected="selectedService === 'Staying'"
          @click="selectService('Staying')"
        />
        <ServiceOption
          icon="fa-solid fa-sun"
          label="Day care"
          :isSelected="selectedService === 'Day care'"
          @click="selectService('Day care')"
        />
      </div>
    </div>
    <div class="grid grid-rows-[30px_1fr] pl-[5px] pr-[10px]">
      <label for="" class="px-[5px]">At your place</label>
      <div class="grid" :class="[catServicesContainerWidth]">
        <ServiceOption
          icon="fa-solid fa-home"
          label="Babysitter at home"
          :isSelected="selectedService === 'Babysitter at home'"
          @click="selectService('Babysitter at home')"
        />
        <ServiceOption
          v-if="selectedPets.includes('Dog')"  
          icon="fa-solid fa-paw"
          label="Exhaust service"
          :isSelected="selectedService === 'Exhaust service'"
          @click="selectService('Exhaust service')"
        />
        <ServiceOption
          icon="fa-solid fa-key"
          label="Pet sitter"
          :isSelected="selectedService === 'Pet sitter'"
          @click="selectService('Pet sitter')"
        />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    ServiceOption
  },
  props: {
    selectedPets: Array // Define selectedPets as a prop
  },
  
  data() {
    return {
      //Set select service initial value
      selectedService: "",
      //width initual
      occupyFullWidth: "grid-cols-[45%_1fr]",

      //Set width dinamically for Cat services div
      catServicesContainerWidth: 'grid-cols-3'
    };
  },
  methods: {
    selectService(service) {
      // Set selected service
      this.selectedService = service;
      console.log(this.selectedService);
      this.$emit("selected-service-updated", this.selectedService);
    },
    // Create a function to change the width dinamically
    displayFullWidth(){
        if(this.selectedPets.includes("Dog")){
            this.occupyFullWidth = "grid-cols-[45%_1fr]";
            this.catServicesContainerWidth = 'grid-cols-3'
        } else {
            this.occupyFullWidth = "grid-cols-1"
            this.catServicesContainerWidth = 'grid-cols-2'
        }
    }
  },
  watch: {
        selectedPets: {
            handler: function (newVal, oldVal) {
                this.displayFullWidth();
            },
            deep: true
        }
  },
  created() {
    // Call displayFullWidth initially to set the correct class
    this.displayFullWidth();
  }
  
}
</script>
