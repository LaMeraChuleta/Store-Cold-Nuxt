<template>
  <div class="flex max-w-6xl mx-auto justify-evenly sm:flex-col">
    <MiniCatalogos />
    <InsertarCatalogo>
      <button @click="subirServidor" class="appearance-none block w-full text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-6 border-green-600">Agregar Disco</button>
    </InsertarCatalogo>
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
    subirServidor: function () {
      this.$nuxt.$emit("agregar_catalogo");
    },
  },
};
</script>