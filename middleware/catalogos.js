export default async function({ $axios, store }) {
    
    if(store.getters['catalogos/CATALOGOS_VACIOS']){
        
        console.log('store buscando catalogos')
        const array_catalogo = [
            'artista', 
            'genero', 
            'formato', 
            'presentacion'
        ]
        
        let object_catalogos = {}
    
        for(let item of array_catalogo){
            let catalogo = await $axios.$get(`/api/${item}`);
            object_catalogos[item] = catalogo
        }
        store.commit('catalogos/CATALOGOS_MUTATION', object_catalogos)
    }
}   