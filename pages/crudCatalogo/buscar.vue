<template>
    <div>
        

        <BuscarCatalogo></BuscarCatalogo>
    
        
    </div>
</template>

<script>

import BuscarCatalogo from "~/components/crudCatalogo/BuscarCatalogo.vue";
export default {
    
    middleware: 'catalogoProductos',
    components:{
        BuscarCatalogo
    }
}
</script>