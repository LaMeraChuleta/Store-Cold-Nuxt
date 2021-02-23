<template>
  <div>
    <div class="w-full max-w-lg flex flex-col mt-3 border h-72 sm:h-auto">
      <h1 class="text-center p-3 text-lg block uppercase tracking-wide text-gray-700 font-bold">Imagenes</h1>
      <div class="overflow-y-auto sm:overflow-auto appearance-none p-5">
        <div class="inline-block sm:inline-flex rounded-md w-64 sm:w-screen m-1">
          <div @drop="onDrop($event, key)" @dragover.prevent @dragenter.prevent v-for="(imagen, key) in imagenes" :key="key">
            <div draggable @dragstart="startDrag($event,key)" class="border object-contain mb-4 mr-3 sm:m-1 sm:w-56 text-gray-100 static">
              <div class="w-8 relative">
                <button @click="quitar_imagen(key)" class="rounded-full hover:bg-red-600 absolute top-0 right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </button>
              </div>
              <img class="w-full" :src="`http://localhost:3000/api/catalogodiscos/imagen/${artista}/${id}/${imagen}`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      index_moviendo: "",
      imagenes: [],
      artista: '',
      id: ''
    };
  },
  created: function () {
    this.$nuxt.$on("visualizar_img", (value) => {
      console.log(value)
      this.imagenes = value.imagenes;
      this.artista = value.artista
      this.id = value.id
    });
  },
  methods: {
    quitar_imagen: function (value) {
      this.$nuxt.$emit("quitar_imagenes", value);
    },
    startDrag: function (evt, index) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      this.index_moviendo = index;
    },
    onDrop(evt, index) {
      if (this.imagen_moviendo != index) {
        this.$nuxt.$emit("actualizar_imagenes", this.index_moviendo, index);
        this.index_moviendo = "";
      }
    },
  },
};
</script>

