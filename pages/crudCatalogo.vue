<template>
  <div>
      <div class="flex  sm:h-32 max-w-6xl mx-auto justify-center">
        <InsertarCatalogo 
          :artistas="artistas" 
          :generos="generos" 
          :formatos="formatos"
          :presentaciones="presentaciones">
        </InsertarCatalogo>
      </div>      
  </div>
</template>

<script>

import InsertarCatalogo from '~/components/InsertarCatalogo.vue'

export default {

    name: 'crudCatalogo',
    data:function() {

      return {

          message: ''
      }
    },
    async asyncData({ $axios }) {

        let artistas = await $axios.$get('/api/artista')
        let generos = await $axios.$get('/api/genero')
        let formatos = await $axios.$get('/api/formato')
        let presentaciones = await $axios.$get('/api/presentacion')
    
         return {
            artistas,
            generos,
            formatos,
            presentaciones
         } 
    },
    components: {
        InsertarCatalogo
    }

}
</script>

<style>

</style>