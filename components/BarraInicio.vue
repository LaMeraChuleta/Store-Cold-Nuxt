<template>
  <div>
    <header class="bg-white border border-black ">
      <div class="flex items-center px-4 py-3 h-16 sm:h-12 justify-between">
        <router-link to="/">
          <div class="text-black font-mono text-4xl">Inicio</div>
        </router-link>
        <div class="ml-8 mr-3 sm:hidden">
        <Buscador></Buscador>                        
        </div>
        <div>
          <button class="inline-flex stroke-current text-white m-4">
            <img width="40" height="40" src="../assets/icon/Carrito.png" />
              <span class=" text-red-800 text-2xl"> {{ 1}} </span>
          </button>
          <button @click="navIsOpen = !navIsOpen" type="button" class="inline text-white stroke-current m-4">
              <img class="mb-1" width="30" height="30" src="../assets/icon/Menu.png" />
          </button>
        </div>
      </div>
      <div class="sm:block hidden">
          <Buscador></Buscador>
      </div>
      <div :class="navIsOpen ? 'block' : 'hidden'" class="px-5 pb-2 bg-white text-center border border-black">
        <a
          href="#"
          class="block font-mono border border-black text-black text-lg hover:text-yellow-500 rounded pb-1"
        >Comprar</a>
        <a
          href="#"
          class="block font-mono border border-black text-black text-lg hover:text-yellow-500 rounded pb-1"
        >Cambiar</a>
        <a
          href="#"
          class="block font-mono border border-black text-black text-lg hover:text-yellow-500 rounded pb-1"
        >Blog</a>
      </div>
    </header>
  </div>
</template>


<script>

import Buscador from '../components/Buscador.vue'

export default {
  data: function() {
    return {
      navIsOpen: false
    };
  },
  components:{
    Buscador
  }

};
</script>
