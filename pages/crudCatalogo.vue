<template>
  <div>
    <div class="flex max-w-6xl mx-auto justify-evenly sm:flex-col">
      <MiniCatalogos></MiniCatalogos>
      <nuxt-child />
      <VisualizarImagenes></VisualizarImagenes>
    </div>
  </div>
</template>

<script>
import MiniCatalogos from "~/components/crudCatalogo/MiniCatalogos.vue";
import VisualizarImagenes from "~/components/crudCatalogo/VisualizarImgenes.vue";

export default {
  name: "crudCatalogo",
  middleware: 'catalogos',
  components: {
    VisualizarImagenes,
    MiniCatalogos,
  },
};
</script>
