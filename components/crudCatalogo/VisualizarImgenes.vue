<template>
  <div>
    <div class="w-full max-w-lg flex flex-col mt-3 border h-72 sm:h-auto">
      <h1 class="text-center p-3 text-lg block uppercase tracking-wide text-gray-700 font-bold">Imagenes</h1>
      <button @click="enviar_imagenes">+</button>
      <div class="overflow-y-auto sm:overflow-auto appearance-none p-5 h-full">
        <div class="inline-block sm:inline-flex rounded-md w-64 sm:w-screen m-1">          
          <div v-for="(imagen, key) in imagenes" :key="key" @drop="onDrop($event, key)"  @dragover.prevent @dragenter.prevent>
            <div draggable @dragstart="startDrag($event, key)" class="border object-contain mb-4 mr-3 sm:m-1 sm:w-56 text-gray-100 static">
              <div class="w-8 relative">
                <button @click="quitar_imagen(key)" class="rounded-full hover:bg-red-600 absolute top-0 right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </button>
              </div>
              <img v-if="imagen.length > 100" class="w-full" :src="imagen" />
              <img v-else class="w-full" :src="`http://localhost:3000/api/catalogodiscos/imagen/${artista}/${id}/${imagen}`"/>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-dotted">
        <div class="relative top-0">
          <input @change="recibir_imagenes" type="file" multiple class="absolute h-full w-full opacity-0"/>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="relative pointer-events-none h-32 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </span>
          <p class="text-center text-xs mb-3">Agregar Imagen</p>
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
      imagenesFile: [],
      artista: "",
      id: "",      
    };
  },
  created: function () {
    this.$nuxt.$on("visualizar_img", (value) => {
      this.imagenes = value.imagenes;
      this.artista = value.artista;
      this.id = value.id;
    });
    this.$nuxt.$on("enviar-imagenes-servidor", (objInsertaImg) => {
      this.enviar_imagenes(objInsertaImg);
    });
  },
  methods: {
    recibir_imagenes: function (event) {   
      console.log(event.target.files)   
      const toBase64 = (file) => 
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });      
      Array.from(event.target.files).forEach((imageFile) => {
        this.imagenesFile.push(imageFile)
        toBase64(imageFile)
          .then((base64) => this.imagenes.push(base64)) 
          .catch((error) => console.log(error));
      }) 
    },
    enviar_imagenes: async function (objInsertaImg) {      
      let formData = new FormData();
      this.imagenesFile.forEach((file) => {
        console.log(file)
        formData.append("imagenesDisco", file)
      })  
      await this.$axios.$post(`/api/catalogodiscos/imagenes/${objInsertaImg.artista}/${objInsertaImg.id}`, formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      
    },
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
