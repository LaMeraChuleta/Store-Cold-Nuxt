<template>
  <div>
    <InsertarCatalogo :catalogo_editar="newItemCatalogo">
      <button
        @click="editar_catalogo"
        class="appearance-none block w-full text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-6 border-yellow-600"
      >Editar Disco</button>
    </InsertarCatalogo>
  </div>
</template>

<script>
import InsertarCatalogo from "~/components/crudCatalogo/InsertarEditarCatalogo.vue";

export default {
  components: {
    InsertarCatalogo,
  },
  middleware: ["catalogoProductos", "catalogos"],
  asyncData({ params, store }) {
    let catalogo_item = store.getters["catalogoProductos/GET_CATALOGO_ID"](
      params.id
    );
    let id_artista = store.getters["catalogos/GET_ARTISTAS"].find(
      (item) => item.nombre == catalogo_item.artista
    ).id;
    let id_genero = store.getters["catalogos/GET_GENEROS"].find(
      (item) => item.nombre == catalogo_item.genero
    ).id;
    let id_formato = store.getters["catalogos/GET_FORMATOS"].find(
      (item) => item.nombre == catalogo_item.formato
    ).id;
    let id_presentacion = store.getters["catalogos/GET_PRESENTACIONES"].find(
      (item) => item.nombre == catalogo_item.presentacion
    ).id;
    let imagenes = catalogo_item.img_base64.map(function (base64) {
      return `data:image/jpeg;base64,${base64}`;
    });
    
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
      },
      catalogos: {
        artista: id_artista,
        genero: id_genero,
        formato: id_formato,
        presentacion: id_presentacion,
      },
      imagenes: imagenes,
      dir_imagenes: catalogo_item.dir_imagenes
      
    };

    return { newItemCatalogo };
  },
  methods: {
    editar_catalogo: function () {
      this.$nuxt.$emit("editar_catalogo");
    },
  },
};
</script>