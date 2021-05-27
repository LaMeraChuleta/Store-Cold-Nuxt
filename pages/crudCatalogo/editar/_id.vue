<template>
  <div class="flex max-w-6xl mx-auto justify-evenly sm:flex-col">
    <MiniCatalogos></MiniCatalogos>
    <InsertarCatalogo :discoEditar="newItemCatalogo" :tipoCreacion="false"></InsertarCatalogo>
    <VisualizarImagenes></VisualizarImagenes>
  </div>
</template>

<script>
import InsertarCatalogo from "~/components/crudCatalogo/InsertarEditarCatalogo.vue";
import VisualizarImagenes from "~/components/crudCatalogo/VisualizarImgenes.vue";
import MiniCatalogos from "~/components/crudCatalogo/MiniCatalogos.vue";

export default {
  components: {
    InsertarCatalogo,
    MiniCatalogos,
    VisualizarImagenes
  },
  middleware: ["catalogoProductos", "catalogos"],
  asyncData({ params, store }) {
    let newItemCatalogo = store.getters["catalogoProductos/GET_CATALOGO_ID"](params.id);             
    return { newItemCatalogo };
  },
  methods: {
  },
};
</script>