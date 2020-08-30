<template>
  <div>
    <div class="flex max-w-6xl mx-auto justify-evenly sm:flex-col">
      <MiniCatalogos :formatos="formatos"></MiniCatalogos>
      <InsertarCatalogo
        @visualizar_img="visualizar_img"
        :artistas="artistas"
        :generos="generos"
        :formatos="formatos"
        :presentaciones="presentaciones"
      ></InsertarCatalogo>
      <VisualizarImagenes :img="copia_imagenes"></VisualizarImagenes>
    </div>
  </div>
</template>

<script>
import InsertarCatalogo from "~/components/InsertarCatalogo.vue";
import MiniCatalogos from "~/components/MiniCatalogos.vue";
import VisualizarImagenes from "~/components/VisualizarImgenes.vue";

export default {
  name: "crudCatalogo",
  data: function () {
    return {
      copia_imagenes: [],
      message: "",
    };
  },
  async asyncData({ $axios }) {
    let artistas = await $axios.$get("/api/artista");
    let generos = await $axios.$get("/api/genero");
    let formatos = await $axios.$get("/api/formato");
    let presentaciones = await $axios.$get("/api/presentacion");

    return {
      artistas,
      generos,
      formatos,
      presentaciones,
    };
  },
  components: {
    VisualizarImagenes,
    InsertarCatalogo,
    MiniCatalogos,
  },
  methods: {
    visualizar_img: function (item) {
      this.copia_imagenes = item;
    },
  },
};
</script>

<style>
</style>