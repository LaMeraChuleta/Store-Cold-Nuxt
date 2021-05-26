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
    let catalogo_item = store.getters["catalogoProductos/GET_CATALOGO_ID"](params.id);
    let obj_artista = store.getters["catalogos/GET_ARTISTAS"].find((item) => item.nombre == catalogo_item.artista);
    let obj_genero = store.getters["catalogos/GET_GENEROS"].find((item) => item.nombre == catalogo_item.genero);
    let obj_formato = store.getters["catalogos/GET_FORMATOS"].find((item) => item.nombre == catalogo_item.formato);
    let obj_presentacion = store.getters["catalogos/GET_PRESENTACIONES"].find((item) => item.nombre == catalogo_item.presentacion);  
    
    let newItemCatalogo = {
      general: {
        titulo: catalogo_item.nombre,
        idArtista: "",
        idGenero: "",
        idFormato: "",
        idPresentacion: "",
        origen: catalogo_item.origen,
        sello: catalogo_item.sello,
        año: catalogo_item.año,
        estadoPortada: catalogo_item.estado_portada,
        estadoDisco: catalogo_item.estado_disco,
        precio: catalogo_item.precio,
        imagenes: catalogo_item.arrayFotos
      },
      catalogos: {
        artista: obj_artista,
        genero: obj_genero,
        formato: obj_formato,
        presentacion: obj_presentacion,
      },            
    };

    return { newItemCatalogo };
  },
  methods: {
  },
};
</script>