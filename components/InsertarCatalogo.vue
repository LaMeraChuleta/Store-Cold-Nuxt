<template>
  <div>
    <form @submit="enviarForm" class="w-full max-w-lg flex flex-col mt-8 sm:p-5">
      <h1
        class="text-center mb-10 text-lg block uppercase tracking-wide text-gray-700 font-bold"
      >Agregar Nuevos Productos al Catalogo</h1>

      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="titulo"
          >Titulo</label>
          <input
            class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="titulo"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="persona"
          >Personaje</label>
          <select
            class="appearance-none block w-full text-xs text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="persona"
          >
            <option>Seleccionar</option>
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
        </div>
      </div>

      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="genero"
          >Genero</label>
          <select
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="genero"
          >
            <option>Seleccionar</option>
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="formato"
          >Formato</label>
          <select
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="formato"
          >
            <option>Seleccionar</option>
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bl-2"
            for="presentacion"
          >Presentacion</label>
          <select
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="presentacion"
          >
            <option>Seleccionar</option>
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
        </div>
      </div>

      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="origen"
          >Origen</label>
          <input
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="origen"
          />
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="sello"
          >Sello</label>
          <input
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="sello"
          />
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bl-2"
            for="año"
          >Año</label>
          <input
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="año"
            type="text"
          />
        </div>
      </div>

      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="estadoPortada"
          >Estado Portada</label>
          <input
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="estadoPortada"
          />
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="estadoDisco"
          >Estado Disco</label>
          <input
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="estadoDisco"
          />
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bl-2"
            for="precio"
          >Precio</label>
          <input
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="precio"
            type="text"
          />
        </div>
      </div>

      <div class="inline-flex -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="fotos"
          >Fotos</label>
          <input
            @change="recibirImagenes"
            class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="fotos"
            type="file"
            multiple
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <button
            type="submit"
            class="appearance-none block w-full text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-6 border-green-600"
          >Agregar Disco</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InsertarCatalogo",
  data: function () {
    return {
      imagenes: [],
    };
  },
  methods: {
    enviarForm: function () {
      alert("hola mundo!");
    },
    recibirImagenes: function (e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) return;
      else {
        for (let item of files) {
          this.crearImage(item);
        }
      }
    },
    crearImage(file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.imagenes.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>