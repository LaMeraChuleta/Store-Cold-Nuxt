<template>
  <div class="flex max-w-6xl mx-auto justify-evenly sm:flex-col">
    <MiniCatalogos></MiniCatalogos>
    <BuscarCatalogo></BuscarCatalogo>
    <VisualizarImagenes></VisualizarImagenes>
  </div>
</template>

<script>
import BuscarCatalogo from "~/components/crudCatalogo/BuscarCatalogo.vue";
import VisualizarImagenes from "~/components/crudCatalogo/VisualizarImgenes.vue";
import MiniCatalogos from "~/components/crudCatalogo/MiniCatalogos.vue";

export default {
  middleware: ["catalogoProductos", "catalogos"],
  components: {
    BuscarCatalogo,
    VisualizarImagenes,
    MiniCatalogos
  },
};
</script>