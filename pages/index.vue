<template>
  <div>
    <div class="flex h-64 sm:h-32 max-w-6xl mx-auto">
      <img src="~/assets/img/Carusel1.jpg" />
    </div>
    <div
      class="border-black border-r-0 border-l-0 border-4 text-center md:text-blue-500  text-black font-mono text-4xl mt-2 sm:text-2xl max-w-6xl mx-auto"
    >
      <p class="pt-1 pb-1">Cambios</p>
    </div>
    <div
      class="flex flex-auto flex-grow sm:flex-col md:flex-row max-w-6xl mx-auto mb-20"
    >
      <div
        class="rounded-sm shadow-sm xl:w-1/4 lg:w-1/4 sm:w-auto"
        v-for="(item, index) in arrayCambios"
        :key="index"
      >
        <cardInfo :infoCard="item"></cardInfo>
      </div>
    </div>

    <div
      class="border-black border-r-0 border-l-0 border-4 text-center md:text-blue-500  text-black font-mono text-4xl mt-10 sm:text-2xl max-w-6xl mx-auto"
    >
      <p class="pt-1 pb-1">Ventas</p>
    </div>
    <div
      class="flex flex-auto flex-grow sm:flex-col md:flex-row max-w-6xl mx-auto mb-20"
    >
      <div
        class="rounded-sm shadow-sm xl:w-1/4 lg:w-1/4 sm:w-auto"
        v-for="(item, index) in arrayVentas"
        :key="index"
      >
        <cardInfo :infoCard="item"></cardInfo>
      </div>
    </div>
  </div>
</template>

<script>
import cardInfo from "~/components/CardInfoDisco.vue";

export default {
  components: {
    cardInfo
  },
  data: function() {
    return {
      arrayVentas: [
        {
          id: 1,
          type: "VENTA",
          urlImage: "PinkFloyd.jpg",
          artista: "Pink Floyd",
          titulo: "Atomic Heart Mother",
          formatoType: "Cd",
          precio: 190
        },
        {
          id: 2,
          type: "VENTA",
          urlImage: "DulceLobo.jpg",
          artista: "Dulce",
          titulo: "Lobo",
          formatoType: "Vinyl",
          precio: 290
        },
        {
          id: 3,
          type: "VENTA",
          urlImage: "SgtPepers.jpg",
          artista: "The Beatles",
          titulo: "Sgt. Pepers and Lonel....",
          formatoType: "Cassette",
          precio: 170
        },
        {
          id: 4,
          type: "VENTA",
          urlImage: "Bach.jpg",
          artista: "Sebastian Bach",
          titulo: "Recopilaciones",
          formatoType: "Vinyl",
          precio: 120
        }
      ],
      arrayCambios: [
        {
          id: 5,
          type: "CAMBIO",
          urlImage: "Comedia.jpg",
          artista: "Pink Floyd",
          titulo: "Atomic Heart Mother",
          formatoType: "Cd",
          precio: 190
        },
        {
          id: 6,
          type: "CAMBIO",
          urlImage: "ElTesoro.jpg",
          artista: "Dulce",
          titulo: "Lobo",
          formatoType: "Vinyl",
          precio: 290
        },
        {
          id: 7,
          type: "CAMBIO",
          urlImage: "Secretos.jpg",
          artista: "The Beatles",
          titulo: "Sgt. Pepers and Lonel....",
          formatoType: "Cassette",
          precio: 170
        },
        {
          id: 8,
          type: "CAMBIO",
          urlImage: "TheB52.jpg",
          artista: "Sebastian Bach",
          titulo: "Recopilaciones",
          formatoType: "Vinyl",
          precio: 120
        }
      ]
    };
  },
  mounted: function() {}
};
</script>
