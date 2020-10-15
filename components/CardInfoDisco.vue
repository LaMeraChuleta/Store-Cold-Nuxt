<template>
  <div class="pt-3 pr-3 pl-3">
    <img
      :src="`http://127.0.0.1:8080/imagen/${infoCard.img_path}1.jpeg`"
      @mouseover="upImg = true"
      @mouseout="upImg = false"
      @click="irPaginaDetalle"
      class="rounded-lg cursor-pointer"
      :class="{'p-1': upImg}"
    />
    <p class="text-gray-900 font-extrabold  text-left text-md">{{ infoCard.artista}}</p>
    <p class="text-gray-900 text-left text-sm">{{ infoCard.nombre }}</p>
    <p
      :class="colorFormato"
      class="text-gray-900  text-left text-sm rounded-lg w-40"
    >Formato: {{ infoCard.formato }}</p>
    <p class="text-gray-900  text-left text-sm">$ {{ infoCard.precio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    infoCard: {
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
        if (this.infoCard.formato === "CD")
          return { "bg-yellow-400": true };
        if (this.infoCard.formato === "Cassette")
          return { "bg-blue-400": true };
        if (this.infoCard.formato === "Vinyl")
          return { "bg-red-400": true };
      }
    },
  },
  methods: {
    irPaginaDetalle: function () {
      this.$router.push({
        path: `/${this.infoCard.formato}/detalles/${this.infoCard.id}`,
      });
    },
 
  }
};
</script>