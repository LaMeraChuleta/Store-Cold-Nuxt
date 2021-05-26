<template>
  <div class="flex max-w-6xl mx-auto justify-evenly sm:flex-col">
    <MiniCatalogos />
    <InsertarCatalogo></InsertarCatalogo>
    <VisualizarImagenes />
  </div>
</template>

<script>
import InsertarCatalogo from "~/components/crudCatalogo/InsertarEditarCatalogo.vue";
import MiniCatalogos from "~/components/crudCatalogo/MiniCatalogos.vue";
import VisualizarImagenes from "~/components/crudCatalogo/VisualizarImgenes.vue";
export default {
  components: {
    InsertarCatalogo,
    MiniCatalogos,
    VisualizarImagenes
  },
  middleware: ["catalogoProductos", "catalogos"],
  methods: {
    
  },
};
</script>