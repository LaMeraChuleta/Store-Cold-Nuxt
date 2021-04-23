
import classArtista from '../models/catalogos/artistas' 
function Catalogo() {
    //Constructor       
    const pooldb = require('../mariadb/conexion')
    const fs = require('fs');    
    const { generar_ruta_id,
        generar_array_base64,
        editar_dir_imagenes,
        generar_array_base64_async } = require('../imagenes/lib/index.js')
    let mensaje = "hola encapsulado"
    this.obtener_todos = function () {
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query(`
                        SELECT catalogo.id, 
                            catalogo.nombre,
                            artistas.nombre AS artista,
                            generos.nombre AS genero,
                            formato.nombre AS formato,
                            presentacion.nombre AS presentacion,
                            catalogo.origen,
                            catalogo.sello,
                            catalogo.año,
                            catalogo.precio,
                            catalogo.estado_disco,
                            catalogo.estado_portada,
                            catalogo.dir_imagenes
                        FROM catalogo 
                        JOIN artistas ON catalogo.id_artista = artistas.id 
                        JOIN generos ON catalogo.id_genero = generos.id
                        JOIN formato ON catalogo.id_formato = formato.id
                        JOIN presentacion ON catalogo.id_presentacion = presentacion.id                                                    
                `)
                        .then(rows => {                              
                            delete rows['meta']                                                                                                                                                                      
                            rows.forEach(disco => {                                                            
                                disco.arrayFotos = fs.readdirSync(disco.dir_imagenes)                                                                   
                            });                                                  
                            resolve(rows)
                        })
                    conn.release()
                })
                .catch(error => {
                    reject(error)                    
                })
        })
    }
    this.generar_catalogo_id_ruta = async function(disco){                     
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';      
        const rutaRaiz = 'C:\\StoreCold\\';      
        let instancia_artistas = classArtista.getInstance()    
        var randomString = '';
        for (var i = 0; i < 3; i++) {
            var randomPoz = Math.floor(Math.random() * letras.length);
            randomString += letras.substring(randomPoz,randomPoz + 1);
        }        
        let artistaClave = ''        
        let artista = await instancia_artistas.obtener_por_id(disco.idArtista)        
        if(Array.from(artista[0].nombre).length >= 8){
            artista[0].nombre.split(' ').forEach(item => {
                if(artistaClave.length < 4)
                    item.length >= 2 ? artistaClave += item.toUpperCase().slice(0, 2) : artistaClave += item.toUpperCase()
            })
        }          
        let tituloClave = ''
        if(Array.from(disco.titulo).length >= 4){
            disco.titulo.split(' ').forEach(item => {
                if(tituloClave.length < 4)
                    item.length >= 2 ? tituloClave += item.toUpperCase().slice(0, 2) : tituloClave += item.toUpperCase()
            })
        }              
        let id = artistaClave + '-' + tituloClave + '-' + disco.año.slice(2) +  '-' + randomString    
        let rutaCompleta = rutaRaiz + artista[0].nombre.replace(/ /g, "") + '\\' + id//.replace(/ /g, "")        
        fs.mkdirSync(rutaCompleta, { recursive: true })
        return { 'id': id, 'ruta': rutaCompleta }                              
    }
    this.insertar_catalogo = async function (nuevo_catalogo) {        
        let idRuta = await this.generar_catalogo_id_ruta(nuevo_catalogo)                
        let datosInsertar = { ...idRuta, ...nuevo_catalogo }        
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query(`
                    INSERT INTO catalogo 
                        (id, 
                        dir_imagenes,
                        nombre, 
                        id_artista, 
                        id_genero, 
                        id_formato, 
                        id_presentacion, 
                        origen, 
                        sello, 
                        año, 
                        estado_portada, 
                        estado_disco, 
                        precio) 
                    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                        Object.values(datosInsertar))
                        .then(() => {                            
                            resolve({ id: idRuta.id, artista: idRuta.ruta.split('\\')[2] })
                        })
                    conn.release()
                })
                .catch(error => {
                    reject(error)
                    console.log('error' + error)
                })
        })
    }
    this.editar_catalogo = function (id, nuevoCatalogo, imagenes, dir_imagen) {
        console.log({ ...nuevoCatalogo, dir_imagen, id })
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query(`
                        UPDATE catalogo 
                        SET  nombre = ?,
                            id_artista = ?,
                            id_genero = ?,
                            id_formato = ?,
                            id_presentacion = ?,
                            origen = ?,
                            sello = ?,
                            año = ?,
                            estado_portada = ?,
                            estado_disco = ?,
                            precio = ?,
                            dir_imagenes = ?
                        WHERE id = ?                    
                    `, Object.values({ ...nuevoCatalogo, dir_imagen, id }))
                        .then(rows => {
                            console.log(editar_dir_imagenes(dir_imagen, imagenes, nuevoCatalogo.titulo))
                            resolve(rows)
                        })
                    conn.release()
                })
                .catch(err => {
                    reject('error')
                    console.log("No se conecto: " + err);
                })
        })
    }
    //METODOS PRIVADOS
    this.set_mensaje = function () {
        console.log('segunda funcion')
    }
}
let Instacia_Catalogo = (function () {
    let instancia;
    function crear() {
        var catalogo = new Catalogo();
        return catalogo;
    }
    return {
        getInstance: function () {
            if (!instancia) {
                instancia = crear();
            }
            return instancia;
        }
    };
})();
export default Instacia_Catalogo