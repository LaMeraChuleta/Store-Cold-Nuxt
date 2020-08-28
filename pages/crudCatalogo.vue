<template>
  <div>
      <div class="flex  sm:h-32 max-w-6xl mx-auto justify-evenly">
        <MiniCatalogos
          :formatos="formatos"
        >
        </MiniCatalogos>

        <InsertarCatalogo 
          :artistas="artistas" 
          :generos="generos" 
          :formatos="formatos"
          :presentaciones="presentaciones">
        </InsertarCatalogo>

        <VisualizarImagenes>
        </VisualizarImagenes>

 
      </div>      
  </div>
</template>

<script>

import InsertarCatalogo from '~/components/InsertarCatalogo.vue'
import MiniCatalogos from '~/components/MiniCatalogos.vue'
import VisualizarImagenes from '~/components/VisualizarImgenes.vue'

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
        VisualizarImagenes,
        InsertarCatalogo,
        MiniCatalogos
    },


}
</script>

<style>

</style>