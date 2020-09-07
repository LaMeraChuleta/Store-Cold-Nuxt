<template>
  <div>
    <InsertarCatalogo>
      <button
        @click="subirServidor"
        class="appearance-none block w-full text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-6 border-green-600"
      >Agregar Disco</button>
    </InsertarCatalogo>
  </div>
</template>

<script>
import InsertarCatalogo from "~/components/crudCatalogo/InsertarEditarCatalogo.vue";

export default {
  components: {
    InsertarCatalogo,
  },
  methods: {
    subirServidor: function () {
      this.$nuxt.$emit("agregar_catalogo");
    },
  },
};
</script>