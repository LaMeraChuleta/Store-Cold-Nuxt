const state = () => ({

    array_catalogo_productos: []
})

const getters = {

    CATALOGO_VACIO: function(state) {
        return JSON.stringify(state.array_catalogo_productos) == '[]'
        ? true
        : false
    }
    // GET_ARTISTAS: function(state,getters) { 
    //     return getters.CATALOGOS_VACIOS 
    //     ? [] 
    //     : state.array_catalogos.artista 
    // },
    // GET_GENEROS: function(state,getters) {

    //     if(!getters.CATALOGOS_VACIOS){
    //         return state.array_catalogos.genero
    //     }
    //     return []
    // },
    // GET_FORMATOS: function(state,getters) {

    //     if(!getters.CATALOGOS_VACIOS){
    //         return state.array_catalogos.formato
    //     }
    //     return []
    // },
    // GET_PRESENTACIONES: function(state,getters) {

    //     if(!getters.CATALOGOS_VACIOS){
    //         return state.array_catalogos.presentacion
    //     }
    //     return []
    // }  
}
const mutations = {

    CATALOGO_PRODUCTOS_MUTATION: function(state, _catalogs_producto) {

        state.array_catalogo_productos = _catalogs_producto
    } 
}

export default {

    state,
    getters,
    mutations
}