<template>
  <div>
    <div class="w-full h-72 sm:h-auto max-w-lg flex flex-col mt-3 sm:mt-0 sm:p-5 border p-6">
      <h1 class="text-center mb-10 text-lg block uppercase tracking-wide text-gray-700 font-bold">Agregar Nuevos Productos al Catalogo</h1>
      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="titulo">Titulo</label>
          <input v-model="newItemCatalogo.titulo" class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white" id="titulo" type="text"/>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="artista">Artista</label>
          <input v-model="textartista" class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white" list="artistas" name="artistas" type="text"/>
          <datalist id="artistas">
            <option v-for="value in artistas" :key="value.id" :value="value.id" class="appearance-none w-full text-xs text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              {{ value.nombre }}
            </option>
          </datalist>
        </div>
      </div>
      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" for="genero">Genero</label>
          <input v-model="textgenero" class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-3 leading-tight focus:outline-none focus:bg-white" list="genero" name="genero" type="text"/>
          <datalist id="genero">
            <option v-for="value in generos" :key="value.id" :value="value.id" class="appearance-none w-full text-xs text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              {{ value.nombre }}
            </option>
          </datalist>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" for="formato">Formato</label>
          <select @change="presentacion_cascada" v-model="newItemCatalogo.idFormato" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="formato">
            <option value>Seleccionar</option>
            <option v-for="value in formatos" :key="value.id" :value="value.id">
              {{ value.nombre }}
            </option>
          </select>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bl-2" for="presentacion">Presentacion</label>
          <select v-model="newItemCatalogo.idPresentacion" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="presentacion">
            <option value>Seleccionar</option>
            <option v-for="value in filtro_presentacion" :key="value.id" :value="value.id">
              {{ value.nombre }}
            </option>
          </select>
        </div>
      </div>
      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" for="origen">Origen</label>
          <input v-model="newItemCatalogo.origen" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" list="origen" name="origen" type="text"/>
          <datalist id="origen">
            <option value="Mexico" key="1"></option>
            <option value="EUA"></option>
            <option value="Canada"></option>
            <option value="Holanda"></option>
            <option value="Alemania"></option>
          </datalist>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" for="sello">Sello</label>
          <input v-model="newItemCatalogo.sello" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="sello"/>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bl-2" for="año" >Año</label>
          <input v-model="newItemCatalogo.año" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="año" type="text"/>
        </div>
      </div>
      <div class="inline-flex -mx-3 mb-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" for="estadoPortada">Estado Portada</label>
          <input v-model.number="newItemCatalogo.estadoPortada" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="estadoPortada" />
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" for="estadoDisco" >Estado Disco</label>
          <input v-model.number="newItemCatalogo.estadoDisco" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="estadoDisco"/>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 bl-2" for="precio">Precio</label>
          <input v-model.number="newItemCatalogo.precio" class="appearance-none text-xs block w-full text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="precio" type="text"/>
        </div>
      </div>
      <div class="inline-flex -mx-3">       
        <div class="w-full md:w-full px-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "InsertarEditarCatalogo",
  props: {
    discoEditar: {
      type: Object,
      required: false,
      default: () => {},
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
      filtro_presentacion: [],
    };
  },
  created: function () {
    this.$nuxt.$on("quitar_imagenes", (index) => {
      this.quitar_imagenes(index);
    });
    this.$nuxt.$on("actualizar_imagenes", (index_cambio, index_recibir) => {
      this.actualizar_imagenes(index_cambio, index_recibir);
    });
    this.$nuxt.$on("agregar_catalogo", () => {
      this.subirServidor();
    });
    //Escucha la vista crudEditar/editar/_id.vue
    this.$nuxt.$on("editar_catalogo", () => {
      this.editarCatalogo();
    });
  },
  mounted: function () {
    if (JSON.stringify(this.discoEditar) != undefined) {      
      this.newItemCatalogo = { ...this.discoEditar.general };
      this.textartista = this.discoEditar.catalogos.artista.nombre;
      this.textgenero = this.discoEditar.catalogos.genero.nombre;
      this.newItemCatalogo.idFormato = this.discoEditar.catalogos.formato.id;
      this.presentacion_cascada();
      this.newItemCatalogo.idPresentacion = this.discoEditar.catalogos.presentacion.id;       
      this.imagenes = this.newItemCatalogo.imagenes         
      this.$nuxt.$emit("visualizar_img", {
        'imagenes': this.imagenes,
        'artista': this.textartista.replace(/ /g, ""),
        'id': this.$route.params.id
      });
    }
  },
  destroyed: function () {
    this.$nuxt.$emit("visualizar_img", []);
  },
  watch:{
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
  computed: {
    ...mapGetters({
      artistas: "catalogos/GET_ARTISTAS",
      generos: "catalogos/GET_GENEROS",
      formatos: "catalogos/GET_FORMATOS",
      presentaciones: "catalogos/GET_PRESENTACIONES",
    }),
  },
  methods: {
    actualizar_imagenes: function (index_cambio, index_recibir) {
      let _img_cambio = this.imagenes[index_cambio];
      let _img_recibir = this.imagenes[index_recibir];
      this.imagenes[index_recibir] = _img_cambio;
      this.imagenes[index_cambio] = _img_recibir;
      this.imagenes = this.imagenes.slice(0, this.imagenes.length);
      this.$nuxt.$emit("visualizar_img", this.imagenes);
    },
    quitar_imagenes: function (index) {
      this.imagenes.splice(index, 1);
      this.$nuxt.$emit("visualizar_img", this.imagenes);
    },
    presentacion_cascada: function () {
      this.filtro_presentacion = this.presentaciones.filter(
        (presentacion) =>
          presentacion.id_formato == this.newItemCatalogo.idFormato
      );
    },  
    editarCatalogo: function () {
      this.imagenes = this.imagenes.map(function (value) {
        return value.split(",")[1];
      });
      this.$axios
        .put("api/catalogodiscos", {
          id: this.$route.params.id,
          nuevoCatalogo: this.newItemCatalogo,
          imagenes: this.imagenes,
          dir_imagenes: this.discoEditar.dir_imagenes,
        })
        .then((data) => {
          this.limpiar_campos();
          this.$router.push("/crudCatalogo/buscar");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    subirServidor: function () {
      console.log(this.newItemCatalogo)
      this.$axios.$post('api/catalogodiscos', this.newItemCatalogo)
      .then((response) => {
        console.log(response)
        this.$nuxt.$emit("enviar-imagenes-servidor")
      })
      .catch((error) => {
        console.log(error)
      })      
    },
    limpiar_campos: function () {
      this.imagenes = [];
      this.$nuxt.$emit("visualizar_img", this.imagenes);
      this.filtro_presentacion = [];
      let _newItemCatalogo = this.newItemCatalogo;
      Object.keys(_newItemCatalogo).forEach(function (prop) {
        _newItemCatalogo[prop] = "";
      });            
      this.newItemCatalogo = _newItemCatalogo;
    },
  },
};
</script>
