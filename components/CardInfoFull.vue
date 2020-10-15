<template>
  <div>
    <div class="flex flex-auto md:flex-row max-w-6xl mx-auto mt-2">
      <div class="flex sm:inline-block md:inline-block lg:flex-auto sm:m-8">
        <div class="lg:w-1/3 xl:w-1/3 lg:ml-20">
          <div>
            <img :src="`data:image/jpeg;base64,${ objectDatos.img_base64[0] }`" />
          </div>
          <div class="grid grid-cols-3">
            <div
              class="inline-block m-2 p-2"
              v-for="(item, index) in objectDatos.img_base64"
              :key="index"
            >
              <img :src="`data:image/jpeg;base64,${ item }`" />
            </div>
          </div>
        </div>
        <div class="xl:w-2/3 lg:w-2/3 flex lg:flex-auto flex-col sm:inline-block">
          <div class="flex lg:flex-row sm:flex-col">
            <div class="xl:w-1/2 lg:w-1/2 ml-8 mt-8">
              <p class="m-1 text-4xl font-extrabold">{{ objectDatos.nombre }}</p>
              <p class="m-1 mb-3 text-lg font-mono">Artista: {{ objectDatos.artista }}</p>
              <p class="m-1 text-lg">Sello: {{ objectDatos.sello }}</p>
              <p class="m-1 text-lg">Formato: {{ objectDatos.formato }}</p>
              <p class="m-1 text-lg">Formato: {{ objectDatos.presentacion }}</p>
              <p class="m-1 text-lg">Pais: {{ objectDatos.origen }}</p>
              <p class="m-1 text-lg">Genero: {{ objectDatos.genero }}</p>
              <p class="m-1 text-lg">Precio: $ {{ objectDatos.precio }}</p>
              <button  
                :disabled="addButon"
                class="sm:mt-2 mt-8 px-12 py-4 hover:bg-gray-800 rounded-lg text-white bg-gray-900"
              >Add To Card</button>
              <!-- <p class="ml-3 text-green-700">Se agrego al carrito</p> -->
              <router-link v-if="addButon" to="/">
                <div class="text-green-800 ml-2 font-hairline w-40">Se agrego al carrito.</div>
              </router-link>
            </div>
            <div class="lg:w-1/2 sm:w-auto inline mt-8">
              <p class="text-lg font-mono font-extrabold">Lista de Canciones</p>
              <ul class="ml-4 mt-3 text-sm font-mono">
                <li>- Esto es un tipo de punto.</li>
                <li>- Este es otro.</li>
                <li>- Y este es otro diferente.</li>
                <li>- Esto es un tipo de punto.</li>
                <li>- Este es otro.</li>
                <li>- Y este es otro diferente.</li>
                <li>- Esto es un tipo de punto.</li>
                <li>- Este es otro.</li>
                <li>- Y este es otro diferente.</li>
              </ul>
            </div>
          </div>
          <div class="flex lg:flex-row sm:flex-col">
            <div class="xl:w-1/2 lg:w-2/2 ml-10 mt-8">
              <p class="text-lg font-mono font-extrabold">Descripcion</p>
              <p
                class="text-justify"
              >Brand New! Latest sealed and unopened run/issue from the Manufacturer/Label that has never seen a needle. Runout Matrix cannot be confirmed. Color variance cannot be confirmed and may vary from issue to issue. Ships from the USA within 2 business days. Tracking included on all domestic orders.</p>
            </div>
            <div class="xl:w-1/2 lg:w-2/2 ml-10 mt-8">
              <p
                class="text-lg font-mono font-extrabold"
              >Pendiente de designar espacio {{ $route.params.id }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {


  props: {},
  data: function () {
    return {
      objectDatos: {},
      arrayImg: [],
      addButon: false,

    };
  },
  beforeMount: function () {
    
    console.log(this.$route.params.id)

    if (this.$route.params.id) {
      this.objectDatos = this.$store.state.catalogoProductos.array_catalogo_productos.find(item => item.id == this.$route.params.id)
    }   
      
  },
  methods: {
    // addCarrito: function(){
    //   this.addButon = true
    //   this.$store.commit('NUM_CARRITO_MUTATION', this.objectDatos)
    // }
  },
};
</script>