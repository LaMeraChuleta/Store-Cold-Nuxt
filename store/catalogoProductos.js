const state = () => ({
    array_catalogo_productos: []
})
const getters = {
    CATALOGO_VACIO: function(state) {
        return JSON.stringify(state.array_catalogo_productos) == '[]'
        ? true
        : false
    },
    GET_CATALOGO_ID:(state,getters) => (id) =>  { 
        return getters.CATALOGOS_VACIOS 
        ? [] 
        : state.array_catalogo_productos.find(item => item.id === id) 
    }
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