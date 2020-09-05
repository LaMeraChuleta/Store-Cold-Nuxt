<template>
  <div>
    <div class="flex h-64 sm:h-32 max-w-6xl mx-auto">
      <img src="~/assets/img/Carusel1.jpg" />
    </div>
    <div
      class="border-black border-r-0 border-l-0 border-4 text-center md:text-blue-500 text-black font-mono text-4xl mt-2 sm:text-2xl max-w-6xl mx-auto"
    >
      <p class="pt-1 pb-1">Cambios</p>
    </div>
    <div class="flex flex-auto flex-grow sm:flex-col md:flex-row max-w-6xl mx-auto mb-20">
      <div
        class="rounded-sm shadow-sm xl:w-1/4 lg:w-1/4 sm:w-auto"
        v-for="(item, index) in catalogo_discos"
        :key="index"
      >
        <cardInfo :infoCard="item"></cardInfo>
      </div>
    </div>

    <!-- <div
      class="border-black border-r-0 border-l-0 border-4 text-center md:text-blue-500 text-black font-mono text-4xl mt-10 sm:text-2xl max-w-6xl mx-auto"
    >
      <p class="pt-1 pb-1">Ventas</p>
    </div>
    
    <div class="flex flex-auto flex-grow sm:flex-col md:flex-row max-w-6xl mx-auto mb-20">
      <div
        class="rounded-sm shadow-sm xl:w-1/4 lg:w-1/4 sm:w-auto"
        v-for="(item, index) in arrayVentas"
        :key="index"
      >
        <cardInfo :infoCard="item"></cardInfo>
      </div>      
    </div> -->
  </div>
</template>

<script>
import cardInfo from "~/components/CardInfoDisco.vue";

export default {

  middleware: 'catalogoProductos',
  components: {
    cardInfo,
  },
  data: function () {
    return {
      
 
      
    };
  },
  computed: {
     
     catalogo_discos: function(){

       return this.$store.state.catalogoProductos.array_catalogo_productos
     } 

  }
};
</script>
