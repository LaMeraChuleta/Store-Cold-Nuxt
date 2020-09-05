import Vuex from 'vuex'
import catalogos from './catalogos.js'
import catalogoProductos from './catalogoProductos.js'


const createStore = () => {

    return new Vuex.Store({
        namespaced: true,
        modules: {
            
            'catalogos': catalogos,
            'catalogoProductos': catalogoProductos
        }
    })
}