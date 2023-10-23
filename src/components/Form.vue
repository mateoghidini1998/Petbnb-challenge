<script setup>
import AdressInput from './AdressInput.vue'
import OptionButton from './OptionButton.vue'
import DatePicker from './DatesPickers/DatePicker.vue'
import ServicesContainer from './Services/ServicesContainer.vue'
import ServiceOption from './Services/ServiceOption.vue'
</script>


<template>
  <div class="p-4 w-[920px] bg-white rounded z-50">
    <div class="w-full flex flex-col mb-[20px]" >
      <label for="" class="px-[5px]">Pets</label>
      <div class="flex w-full">
        <OptionButton
          v-for="petCategory in petCategories"
          :key="petCategory"
          :label="petCategory"
          :selectedPets="selectedPets"
          :icon="getIconForCategory(petCategory)"
          @click="togglePetCategory(petCategory)"
        />
      </div>
    </div>
    <div class="w-full flex flex-col">
        <ServicesContainer :selectedPets="selectedPets" @selected-service-updated="updateSelectedService"/>
        <div class="w-full flex flex-col">
          <div class="grid grid-cols-[50%_33%_1fr]">
            <div class="grid grid-rows-[24px_60px]"> 
              <label for="">{{selectedService}} near</label>
              <AdressInput/>
            </div>
            <div class="grid grid-rows-[24px_60px]"> 
              <label for="">For which dates?</label>
              <DatePicker
              :selectedService="selectedService"
              />
            </div>
            <div class="grid grid-rows-[24px_60px]">
              <div></div>
              <button class="flex-1 rounded bg-[#E5573F]">
                <font-awesome-icon icon="fa-solid fa-search" class="text-sm text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
    OptionButton,
    AdressInput,
    DatePicker,
    ServicesContainer,
    ServiceOption
  },
  data() {
    return {
      petCategories: ["Dog", "Cat"],
      selectedService: "Staying",
      selectedPets: ["Dog"],
    };
  },
  methods:{
    togglePetCategory(petCategory){
      //If the selected pet category is not in the array, then push it.
      const index = this.selectedPets.indexOf(petCategory);
      if(index === -1){
        this.selectedPets.push(petCategory);
        console.log(this.selectedPets);

      //If there is already a pet category in the selected pets array then remove it.
      } else {
        this.selectedPets.splice(index,1);
        console.log(this.selectedPets);
      }
    },
    updateSelectedService(service) {
      this.selectedService = service;
    },
    getIconForCategory(category) {
      // Return the icon object with prefix and iconName properties
      if (category === 'Dog') {
        return "fa-solid fa-dog"
      } else if (category === 'Cat') {
        return "fa-solid fa-cat"
      }
    },
  }

}
</script>