<template>
  <div>
    <header class="bg-white border">
      <div class="flex items-center px-4 py-3 h-16 sm:h-12 justify-between">
        <router-link to="/">
          <div class="text-black font-mono text-4xl">Inicio</div>
        </router-link>
        <div class="sm:hidden">
          <Buscador></Buscador>
        </div>
        <div class="flex justify-center ">
          <button class="inline-flex w-10 text-gray-800 m-2">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="text-red-800 text-2xl">{{ 1 }}</span>
          </button>
          <button
            @click="navIsOpen = !navIsOpen"
            type="button"
            class="inline w-8 m-2"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="sm:block hidden sm:pl-2 sm:pr-2">
        <Buscador></Buscador>
      </div>
      <div
        @click="navIsOpen = false"
        :class="navIsOpen ? 'block' : 'hidden'"
        class="bg-white text-center border"
      >
        <router-link to="/crudCatalogo/agregar">
          <a
            href="#"
            class="block w-full borde text-lg hover:text-gray-800 rounded"
            >Agregar</a
          >
        </router-link>
        <router-link to="/crudCatalogo/buscar">
          <a
            href="#"
            class="block border text-lg hover:text-gray-800 rounded pb-1"
            >Buscar</a
          >
        </router-link>
        <router-link to="/">
          <a
            href="#"
            class="block border text-lg hover:text-gray-800 rounded pb-1"
            >Blog</a
          >
        </router-link>
      </div>
    </header>
  </div>
</template>


<script>
import Buscador from "../components/Buscador.vue";

export default {
  data: function () {
    return {
      navIsOpen: false,
    };
  },
  components: {
    Buscador,
  },
};
</script>
