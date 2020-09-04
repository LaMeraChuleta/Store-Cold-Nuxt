import Vuex from 'vuex'
import catalogos from './catalogos.js'


const createStore = () => {

    return new Vuex.Store({
        namespaced: true,
        modules: {
            
            'catalogos': catalogos
        }
    })
}