<template>
  <div>
      <div class="flex  sm:h-32 max-w-6xl mx-auto justify-center">
        <InsertarCatalogo></InsertarCatalogo>
      </div>      
  </div>
</template>

<script>

import InsertarCatalogo from '~/components/InsertarCatalogo.vue'

export default {

    name: 'crudCatalogo',

    async asyncData({ $axios }) {

        let test = await $axios.$get('/api/test')
        
    },

    components: {
        InsertarCatalogo
    }

}
</script>

<style>

</style>