const state = () => ({
    array_catalogos: {}
})
const getters = {
    CATALOGOS_VACIOS: function(state) {
        return JSON.stringify(state.array_catalogos) == '{}'
        ? true
        : false
    },
    GET_ARTISTAS: function(state,getters) { 
        return getters.CATALOGOS_VACIOS 
        ? [] 
        : state.array_catalogos.artista 
    },
    GET_GENEROS: function(state,getters) {
        if(!getters.CATALOGOS_VACIOS){
            return state.array_catalogos.genero
        }
        return []
    },
    GET_FORMATOS: function(state,getters) {
        if(!getters.CATALOGOS_VACIOS){
            return state.array_catalogos.formato
        }
        return []
    },
    GET_PRESENTACIONES: function(state,getters) {
        if(!getters.CATALOGOS_VACIOS){
            return state.array_catalogos.presentacion
        }
        return []
    }  
}
const mutations = {
    CATALOGOS_MUTATION: function(state, _catalogos) {
        state.array_catalogos = _catalogos
    } 
}

export default {

    state,
    getters,
    mutations
}