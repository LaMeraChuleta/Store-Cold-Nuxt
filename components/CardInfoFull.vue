<template>
  <div>
    <div class="flex flex-auto md:flex-row max-w-6xl mx-auto mt-2">
      <div class="flex sm:inline-block md:inline-block lg:flex-auto sm:m-8">
        <div class="lg:w-1/3 xl:w-1/3 lg:ml-20">
          <div>
            <img :src="require(`@/assets/img/${ objectDatos.urlImage }`)" />
          </div>
          <div class="grid grid-cols-3">
            <div class="inline-block m-2 p-2" v-for="(item, index) in arrayImg" :key="index">
              <img :src="require(`@/assets/img/${ item }`)" />
            </div>
          </div>
        </div>
        <div class="xl:w-2/3 lg:w-2/3 flex lg:flex-auto flex-col bg-gray-200 sm:inline-block">
          <div class="flex lg:flex-row sm:flex-col">
            <div class="xl:w-1/2 lg:w-1/2 ml-8 mt-8">
              <p class="m-1 text-2xl font-extrabold font-mono">{{ objectDatos.titulo }}</p>
              <p class="m-1 mb-3 text-lg font-mono">{{ objectDatos.artista }}</p>
              <p class="m-1 text-gray-700 font-mono text-lg">Sello: Todos Flotan Record</p>
              <p class="m-1 text-gray-700 font-mono text-lg">Formato: {{ objectDatos.formatoType }}</p>
              <p class="m-1 text-gray-700 font-mono text-lg">Pais: México</p>
              <p class="m-1 text-gray-700 font-mono text-lg">Genero: Alternativa</p>
              <p class="m-1 text-gray-700 font-mono text-lg">Precio: $ {{ objectDatos.precio }}</p>
              <button
                @click="addCarrito"
                :disabled="addButon"
                class="sm:mt-2 mt-8 px-12 py-4 hover:bg-gray-800 rounded-lg text-white bg-gray-900"
              >Add To Card</button>
              <!-- <p class="ml-3 text-green-700">Se agrego al carrito</p> -->
              <router-link v-if="addButon" to="/">
                <div class="text-green-800 ml-2 font-hairline w-40">Se agrego al carrito.</div>
              </router-link>
            </div>
            <div class="lg:w-1/2 lg:w-1/2 sm:w-auto inline mt-8">
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

      arrayImagenes: [
        {
          id: 1,
          arrayImg: [
            "PinkFloyd.jpg",
            "PinkFloyd.jpg",
            "PinkFloyd.jpg",
            "PinkFloyd.jpg",
            "PinkFloyd.jpg",
            "PinkFloyd.jpg",
          ],
        },
        {
          id: 2,
          arrayImg: [
            "DulceLobo.jpg",
            "DulceLobo.jpg",
            "DulceLobo.jpg",
            "DulceLobo.jpg",
            "DulceLobo.jpg",
            "DulceLobo.jpg",
          ],
        },
        {
          id: 3,
          arrayImg: [
            "SgtPepers.jpg",
            "SgtPepers.jpg",
            "SgtPepers.jpg",
            "SgtPepers.jpg",
            "SgtPepers.jpg",
            "SgtPepers.jpg",
          ],
        },
        {
          id: 4,
          arrayImg: [
            "Bach.jpg",
            "Bach.jpg",
            "Bach.jpg",
            "Bach.jpg",
            "Bach.jpg",
            "Bach.jpg",
          ],
        },
        {
          id: 5,
          arrayImg: [
            "Comedia.jpg",
            "Comedia.jpg",
            "Comedia.jpg",
            "Comedia.jpg",
            "Comedia.jpg",
            "Comedia.jpg",
          ],
        },
        {
          id: 6,
          arrayImg: [
            "ElTesoro.jpg",
            "ElTesoro.jpg",
            "ElTesoro.jpg",
            "ElTesoro.jpg",
            "ElTesoro.jpg",
            "ElTesoro.jpg",
          ],
        },
        {
          id: 7,
          arrayImg: [
            "Secretos.jpg",
            "Secretos.jpg",
            "Secretos.jpg",
            "Secretos.jpg",
            "Secretos.jpg",
            "Secretos.jpg",
          ],
        },
        {
          id: 8,
          arrayImg: [
            "TheB52.jpg",
            "TheB52.jpg",
            "TheB52.jpg",
            "TheB52.jpg",
            "TheB52.jpg",
            "TheB52.jpg",
          ],
        },
      ],
      dataCambios: [
        {
          id: 5,
          type: "CAMBIO",
          urlImage: "Comedia.jpg",
          artista: "Pink Floyd",
          titulo: "Atomic Heart Mother",
          formatoType: "Disco Mp3",
          precio: 190,
        },
        {
          id: 6,
          type: "CAMBIO",
          urlImage: "ElTesoro.jpg",
          artista: "Dulce",
          titulo: "Lobo",
          formatoType: "Vinyl LP",
          precio: 290,
        },
        {
          id: 7,
          type: "CAMBIO",
          urlImage: "Secretos.jpg",
          artista: "The Beatles",
          titulo: "Sgt. Pepers and Lonel....",
          formatoType: "Cassette",
          precio: 170,
        },
        {
          id: 8,
          type: "CAMBIO",
          urlImage: "TheB52.jpg",
          artista: "Sebastian Bach",
          titulo: "Recopilaciones",
          formatoType: "Vinyl LP",
          precio: 120,
        },
      ],
      dataVenta: [
        {
          id: 1,
          type: "VENTA",
          urlImage: "PinkFloyd.jpg",
          artista: "Pink Floyd",
          titulo: "Atomic Heart Mother",
          formatoType: "Disco Mp3",
          precio: 190,
        },
        {
          id: 2,
          type: "VENTA",
          urlImage: "DulceLobo.jpg",
          artista: "Dulce",
          titulo: "Lobo",
          formatoType: "Vinyl LP",
          precio: 290,
        },
        {
          id: 3,
          type: "VENTA",
          urlImage: "SgtPepers.jpg",
          artista: "The Beatles",
          titulo: "Sgt. Pepers and Lonel....",
          formatoType: "Cassette",
          precio: 170,
        },
        {
          id: 4,
          type: "VENTA",
          urlImage: "Bach.jpg",
          artista: "Sebastian Bach",
          titulo: "Recopilaciones",
          formatoType: "Vinyl LP",
          precio: 120,
        },
      ],
    };
  },
  beforeMount: function () {
    this.arrayImg = this.arrayImagenes.find(
      (img) => img.id == this.$route.params.id
    ).arrayImg;

    if (this.$route.params.id > 4) {
      this.objectDatos = this.dataCambios.find(
        (img) => img.id == this.$route.params.id
      );
    } else {
      this.objectDatos = this.dataVenta.find(
        (img) => img.id == this.$route.params.id
      );
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