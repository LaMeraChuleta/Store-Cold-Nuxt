 <template>
  <div>
    <div class="-mx-3 border border-gray-400 rounded-md mb-3">
      <div class="w-full border border-gray-400 rounded-md h-12 text-gray-700 px-8">
        <div class="flex justify-between p-1 mt-1">
          <span class="capitalize">Agregar {{ tipo }}</span>
          <button
            @click="ver == true ? ver = false : ver = true"
            class="appearance-none block border rounded-full focus:outline-none focus:bg-white border-gray-600 mt-1 ml-10 w-6"
          >
            <template v-if="ver">
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
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </template>
            <template v-else>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </template>
          </button>
        </div>
      </div>
      <template v-if="ver">
        <slot name="slot_up"></slot>
        <div class="w-full md:w-1/2 px-3 mb-2 mt-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
            for="Nombre"
          >Nombre</label>
          <input
            v-model="nombre"
            class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="Nombre"
            type="text"
          />
        </div>
        <slot name="slot_down"></slot>
        <div class="w-full md:w-1/2 px-3 text-xs flex justify-end">
          <button
            @click="insertar_catalogo"
            class="appearance-none block w-24 text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-3 border-green-600"
          >Agregar</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String,
      required: true,
    },
    id_formato: {
      type: Number,
      required: false,
    },
    pais: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      ver: false,
      nombre: "",
    };
  },
  methods: {
    insertar_catalogo: function () {

      let object_insertar = {
        "nombre": this.nombre
      }
      if(this.tipo == 'artista'){
          object_insertar.pais = this.pais
      }
      if(this.tipo == 'presentacion'){
          object_insertar.id_formato = this.id_formato
      }
      console.log(object_insertar)
      this.$axios.post(`/api/${this.tipo}`, object_insertar)
        .then(data => {
          this.nombre = ''
          location.reload();
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        }
      )
    },
  },
};
</script>