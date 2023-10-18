<template>
  <div class="w-1/2 rounded border-[1px] border-[#DBDDB] border-solid flex items-center relative">
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
        types: ["geocode"], // Puedes ajustar esto según tus necesidades (ej. solo direcciones)
      });

      autocomplete.addListener("place_changed", this.placeChanged);
    },
    placeChanged() {
      const place = this.$refs.autocompleteInput.getPlace();
      console.log(place); // Aquí puedes acceder a los detalles de la dirección seleccionada
    },
    handleInput() {
      // Tu lógica personalizada cuando el usuario escribe en el campo de entrada
    },
  },
};
</script>
