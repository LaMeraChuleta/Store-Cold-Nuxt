<template>
  <div>
    <div class="w-full h-72 flex flex-col mt-3 sm:mt-0 border p-5 sm:h-auto">
      <h1
        class="text-center mb-10 text-lg block uppercase tracking-wide text-gray-700 font-bold"
      >Buscar en el catalogo</h1>
      <div class="mb-5 inline-flex">
        <input
          @keyup.enter="buscar_catalogo"
          v-model="busqueda"
          type="text"
          class="border w-full rounded-full px-4"
        />
        <button @click="buscar_catalogo" class="w-5 m-1 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div class>
        <table class>
          <thead class="text-gray-700 text-xs">
            <tr class="border h-10">
              <th>Titulo</th>
              <th>Artista</th>
              <th>Origen</th>
              <th>Año</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-xs">
            <tr
              v-for="(item, key) in catalogo_productos_slice"
              :key="key"
              class="hover:bg-gray-200 focus:bg-gray-200 cursor-pointer"
              @click="enviar_imagenes(key)"
            >
              <th class="border h-12 w-32">{{ item.nombre }}</th>
              <th class="border h-12 w-32">{{ item.artista }}</th>
              <th class="border h-12 w-20">{{ item.origen }}</th>
              <th class="border h-12 w-16">{{ item.año }}</th>
              <th class="border h-12 w-20">
                <button @click="editar_catalogo(item.id)" class="w-4 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
                <button class="w-4 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      busqueda: "",
    };
  },
  methods: {
    enviar_imagenes: function (index) {
      let imagenes = this.array_catalogo_productos[index].img_base64.map(function (
        base64
      ) {
        return `data:image/jpeg;base64,${base64}`;
      });
      this.$nuxt.$emit("visualizar_img", imagenes);
    },
    editar_catalogo: function (id) {
      this.$router.push({
        name: "crudCatalogo-editar-id",
        params: { id },
      });
    },
    buscar_catalogo: function () {
      let result = [];
      this.array_catalogo_productos.forEach((element) => {
        if (element.nombre.includes(this.busqueda)) {
           result.push(element);
        }
      });
      
      console.log(result);
    },
  },
  computed: {
    ...mapState("catalogoProductos", {
      array_catalogo_productos: (state) => state.array_catalogo_productos,
    }),
    catalogo_productos_slice: function () {
      return this.array_catalogo_productos.slice(0, 9);
    },
  },
};
</script>