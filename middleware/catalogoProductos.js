export default async function({ $axios, store }) {
    
    if(store.getters['catalogoProductos/CATALOGO_VACIO']){
        
        console.log('store buscando catalogos productos')
        let catalogo_productos = await $axios.$get("/api/catalogodiscos");
        
        store.commit('catalogoProductos/CATALOGO_PRODUCTOS_MUTATION', catalogo_productos)
    }
}   