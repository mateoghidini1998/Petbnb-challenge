<template>
  <div class="w-full rounded border-[1px] border-[#DBDDB] border-solid flex items-center relative">
    <font-awesome-icon icon="fa-solid fa-map-marker" class="text-sm text-[#425864] absolute left-2.5" aria-hidden="true" />
    <input
      ref="autocompleteInput"
      type="text"
      class="h-full w-full px-6 overflow-hidden whitespace-nowrap outline-none text-ellipsis"
      placeholder="Plaats, buurt, adres etc."
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    this.initAutocomplete();
  },
  methods: {
    initAutocomplete() {
      const inputElement = this.$refs.autocompleteInput;

      const autocomplete = new google.maps.places.Autocomplete(inputElement, {
        types: ["geocode"], 
      });

      autocomplete.addListener("place_changed", this.placeChanged);
    },
    placeChanged() {
      const place = this.$refs.autocompleteInput.getPlace();
      console.log(place); 
    },
    handleInput() {
      
    },
  },
};
</script>
