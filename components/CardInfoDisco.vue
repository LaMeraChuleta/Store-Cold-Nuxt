<template>
  <div class="pt-3 pr-3 pl-3">
    <img
      :src="`http://localhost:3000/api/catalogodiscos/imagen/${infoDisco.artista}/${infoDisco.id}/${infoDisco.arrayFotos[0]}`"
      @mouseover="upImg = true"
      @mouseout="upImg = false"
      @click="irPaginaDetalle"
      class="rounded-lg cursor-pointer"
      :class="{'p-1': upImg}"
    />
    <p class="text-gray-900 font-extrabold  text-left text-md">{{ infoDisco.artista }}</p>
    <p class="text-gray-900 text-left text-sm">{{ infoDisco.nombre }}</p>
    <p
      :class="colorFormato"
      class="text-gray-900  text-left text-sm rounded-lg w-40"
    >Formato: {{ infoDisco.formato }}</p>
    <p class="text-gray-900  text-left text-sm">$ {{ infoDisco.precio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    infoDisco: {
      type: Object,
      default: () => {},
    },
  },
  data: function () {
    return {
      upImg: false,
    };
  },
  computed: {
    colorFormato: function () {
      if (this.infoCard != {}) {
        if (this.infoDisco.formato === "CD")
          return { "bg-yellow-400": true };
        if (this.infoDisco.formato === "Cassette")
          return { "bg-blue-400": true };
        if (this.infoDisco.formato === "Vinyl")
          return { "bg-red-400": true };
      }
    },
  },
  methods: {
    irPaginaDetalle: function () {
      this.$router.push({
        path: `/${this.infoDisco.formato}/detalles/${this.infoDisco.id}`,
      });
    },
 
  }
};
</script>