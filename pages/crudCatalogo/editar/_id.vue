<template>
  <div class="flex max-w-6xl mx-auto justify-evenly sm:flex-col">
    <MiniCatalogos></MiniCatalogos>
    <InsertarCatalogo :discoEditar="discoEditar" :tipoCreacion="false"></InsertarCatalogo>
    <VisualizarImagenes :idCatalogo="idCatalogo"></VisualizarImagenes>
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
    let idCatalogo = params.id
    let discoEditar = store.getters["catalogoProductos/GET_CATALOGO_ID"](params.id);             
    return { discoEditar, idCatalogo };
  },
  methods: {
  },
};
</script>