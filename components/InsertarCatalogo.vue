<template>
  <div>
    <div class="w-full max-w-lg flex flex-col mt-8 sm:p-5">
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
            v-model="newItemCatalogo.titulo"
            class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="titulo"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="artista"
          >Artista</label>
          <input
            v-model="textartista"
            class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
            list="artistas"
            name="artistas"
            type="text"
          />
          <datalist id="artistas">
            <option
              v-for="value in artistas"
              :key="value.id"
              :value="value.id"
              class="appearance-none w-full text-xs text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >{{ value.nombre }}</option>
          </datalist>
        </div>
      </div>

      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="genero"
          >Genero</label>
          <input
            v-model="textgenero"
            class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white"
            list="genero"
            name="genero"
            type="text"
          />
          <datalist id="genero">
            <option
              v-for="value in generos"
              :key="value.id"
              :value="value.id"
              class="appearance-none w-full text-xs text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >{{ value.nombre }}</option>
          </datalist>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="formato"
          >Formato</label>
          <select
            v-model="newItemCatalogo.idFormato"
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="formato"
          >
            <option value="">Seleccionar</option>
            <option v-for="value in formatos" :key="value.id" :value="value.id">{{ value.nombre }}</option>
          </select>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bl-2"
            for="presentacion"
          >Presentacion</label>
          <select
            v-model="newItemCatalogo.idPresentacion"
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="presentacion"
          >
            <option value="">Seleccionar</option>
            <option
              v-for="value in presentaciones"
              :key="value.id"
              :value="value.id"
            >{{ value.nombre }}</option>
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
            v-model="newItemCatalogo.origen"
            class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            list="origen"
            name="origen"
            type="text"
          />
          <datalist id="origen">
              <option value="Mexico" key="1"></option>
              <option value="EUA"></option>
              <option value="Canada"></option>  
              <option value="Holanda"></option>
              <option value="Alemania"></option>
          </datalist>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2"
            for="sello"
          >Sello</label>
          <input
            v-model="newItemCatalogo.sello"
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
            v-model="newItemCatalogo.año"
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
            v-model.number="newItemCatalogo.estadoPortada"
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
            v-model.number="newItemCatalogo.estadoDisco"
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
            v-model.number="newItemCatalogo.precio"
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
          @click="subirServidor"
            class="appearance-none block w-full text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-6 border-green-600"
          >Agregar Disco</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsertarCatalogo",
  props: {
    artistas: {
      type: Array,
      required: true,
    },
    generos: {
      type: Array,
      required: true,
    },
    formatos: {
      type: Array,
      required: true,
    },
    presentaciones: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      newItemCatalogo: {
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
      },
      imagenes: [],
      textartista: "",
      textgenero: "",
    };
  },
  watch: {
    textartista: function (newArtista, oldArtista) {
      if (/^\d+$/.test(newArtista)) {
        let artista = this.artistas.find((artista) => artista.id == newArtista);
        this.textartista = artista.nombre;
        this.newItemCatalogo.idArtista = artista.id;
      }
    },
    textgenero: function (newGenero, oldGenero) {
      if (/^\d+$/.test(newGenero)) {
        let genero = this.generos.find((genero) => genero.id == newGenero);
        this.textgenero = genero.nombre;
        this.newItemCatalogo.idGenero = genero.id;
      }
    },
  },
  methods: {
    recibirImagenes: function (e) {
      var files = e.target.files || e.dataTransfer.files;
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
        console.log('ahora te veo')
        console.log(e.target.result.split(',')[0])
        console.log(e.target.result.split(',')[1])
        this.imagenes.push(e.target.result.split(',')[1]);
      };
      reader.readAsDataURL(file);
    },
    subirServidor: async function(){

      
      let res = await this.$axios.$post('/api/upload',{
          newItem: this.newItemCatalogo,
          artista: this.textartista,
          img: this.imagenes
      })
      
    }
  },
};
</script>