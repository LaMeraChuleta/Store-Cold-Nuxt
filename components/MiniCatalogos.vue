<template>
  <div>
    <div class="w-full max-w-lg flex flex-col mt-3 border p-5">
      <h1
        class="text-center mb-10 text-lg block uppercase tracking-wide text-gray-700 font-bold"
      >Mini Catalogos</h1>

      <div class="-mx-3 border border-gray-400 rounded-md">
        <div class="w-full border border-gray-400 rounded-md h-12 text-gray-700 px-8">
          <div class="flex justify-between p-1 mt-1">
            <span>Agregar Artista</span>
            <button
              @click="ver_artista == true ? ver_artista = false : ver_artista = true"
              class="appearance-none block border rounded-full focus:outline-none focus:bg-white border-gray-600 mt-1 ml-10 w-6"
            >
              <template v-if="ver_artista">
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
        <template v-if="ver_artista">
          <div class="w-full md:w-1/2 px-3 mb-2 mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
              for="Nombre"
            >Nombre</label>
            <input
              class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-1 leading-tight focus:outline-none focus:bg-white"
              id="Nombre"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
              for="artista"
            >Pais</label>
            <input
              class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 mb-1 leading-tight focus:outline-none focus:bg-white"
              name="Pais"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 text-xs flex justify-end">
            <button
              
              class="appearance-none block w-24 text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-3 border-green-600"
            >Agregar Artista</button>
          </div>
        </template>
      </div>

    <div class="-mx-3 border border-gray-400 rounded-md mt-2">
        <div class="w-full border border-gray-400 rounded-md h-12 text-gray-700 px-8">
          <div class="flex justify-between p-1 mt-1">
            <span>Agregar Genero</span>
            <button
              @click="ver_genero == true ? ver_genero = false : ver_genero = true"
              class="appearance-none block border rounded-full focus:outline-none focus:bg-white border-gray-600 mt-1 ml-10 w-6"
            >
              <template v-if="ver_genero">
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
        <template v-if="ver_genero">
          <div class="w-full md:w-1/2 px-3 mb-2 mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
              for="Nombre"
            >Nombre</label>
            <input
              class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 leading-tight focus:outline-none focus:bg-white"
              id="Nombre"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 text-xs flex justify-end">
            <button
              
              class="appearance-none block w-24 text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-3 border-green-600"
            >Agregar Artista</button>
          </div>
        </template>
    </div>



    
    <div class="-mx-3 border border-gray-400 rounded-md mt-2">
        <div class="w-full border border-gray-400 rounded-md h-12 text-gray-700 px-8">
          <div class="flex justify-between p-1 mt-1">
            <span>Agregar Formato</span>
            <button
              @click="ver_formato == true ? ver_formato = false : ver_formato = true"
              class="appearance-none block border rounded-full focus:outline-none focus:bg-white border-gray-600 mt-1 ml-10 w-6"
            >
              <template v-if="ver_formato">
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
        <template v-if="ver_formato">
          <div class="w-full md:w-1/2 px-3 mb-2 mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
              for="Nombre"
            >Nombre</label>
            <input
              class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 leading-tight focus:outline-none focus:bg-white"
              id="Nombre"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 text-xs flex justify-end">
            <button
            
              class="appearance-none block w-24 text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-3 border-green-600"
            >Agregar Artista</button>
          </div>
        </template>
    </div>



    
    <div class="-mx-3 border border-gray-400 rounded-md mt-2">
        <div class="w-full border border-gray-400 rounded-md h-12 text-gray-700 px-8">
          <div class="flex justify-between text-md p-1 mt-1">
            <span>Agregar Presentacion</span>
            <button
              @click="ver_presentacion == true ? ver_presentacion = false : ver_presentacion = true"
              class="appearance-none block border rounded-full focus:outline-none focus:bg-white border-gray-600 mt-1 ml-10 w-6"
            >
              <template v-if="ver_presentacion">
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
        <template v-if="ver_presentacion">
          <div class="w-full md:w-1/2 px-3 mb-2 mt-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
              for="Nombre"
            >Nombre</label>
            <input
              class="appearance-none block w-full text-gray-700 border rounded py-2 px-1 leading-tight focus:outline-none focus:bg-white"
              id="Nombre"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 text-xs flex justify-end">
            <button
            
              class="appearance-none block w-24 text-gray-700 border rounded py-3 px-1 mb-3 leading-tight focus:outline-none focus:bg-white mt-3 border-green-600"
            >Agregar Artista</button>
          </div>
        </template>
    </div>





    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCatalogos",
  data: function () {
    return {

      ver_artista: false,
      ver_genero: false,
      ver_formato: false,
      ver_presentacion: false,
    };
  },
};
</script>

