<template>
  <div>
    <div class="w-full h-72 max-w-lg flex flex-col mt-3 sm:mt-0 border p-5 sm:h-auto">
      <h1
        class="text-center mb-10 text-lg block uppercase tracking-wide text-gray-700 font-bold"
      >Mini Catalogos</h1>
      <BarraMiniCatalogo :pais="pais" :tipo="'artista'">
        <template slot="slot_down">
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
              for="artista"
            >Pais</label>
            <input
              v-model="pais"
              class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-1 leading-tight focus:outline-none focus:bg-white"
              name="Pais"
              type="text"
            />
          </div>
        </template>
      </BarraMiniCatalogo>
      <BarraMiniCatalogo :tipo="'genero'"></BarraMiniCatalogo>
      <BarraMiniCatalogo :tipo="'formato'"></BarraMiniCatalogo>
      <BarraMiniCatalogo :id_formato="id_formato" :tipo="'presentacion'">
        <template slot="slot_up">
          <div class="w-full md:w-1/2 px-3 mb-2 mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
              for="artista"
            >Formato</label>
            <select
              v-model="id_formato"
              class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-1 leading-tight focus:outline-none focus:bg-white text-sm"
              id="formato"
            >
              <option value>Seleccionar</option>
              <option v-for="value in formatos" :key="value.id" :value="value.id">{{ value.nombre }}</option>
            </select>
          </div>
        </template>
      </BarraMiniCatalogo>
    </div>
  </div>
</template>

<script>
import BarraMiniCatalogo from "~/components/crudCatalogo/BarraMiniCatalogo.vue";

export default {
  name: "MiniCatalogos",
  data: function () {
    return {
      id_formato: 0,
      pais: "",
    };
  },
  components: {
    BarraMiniCatalogo,
  },
  computed: {
    formatos: function () {
      return this.$store.getters["catalogos/GET_FORMATOS"];
    },
  },
};
</script>

