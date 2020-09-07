<template>
  <div>
    <InsertarCatalogo>
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
  created: function () {
    let param = this.$route.params.id;

    let newItemCatalogo = {
      titulo: "",
      idArtista: "",
      idGenero: "",
      idFormato: "",
      idPresentacion: "",
      origen: "",
      sello: "",
      año: "",
      estadoPortada: "",
      estadoDisco: "",
      precio: "",
    };
    console.log(param);
    console.log(newItemCatalogo)
  },
  methods: {
    editar_catalogo: function () {
      this.$nuxt.$emit("editar_catalogo");
    },
  },
};
</script>