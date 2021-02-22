
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
                            // rows.forEach(async disco => {
                            //     // disco.img_path = disco.artista.replace(/\s/g, '') + '\\' +
                            //     // disco.id + '\\' +
                            //     // disco.nombre.replace(/\s/g, '')
                            //     // console.log(disco.dir_imagenes)                                                                                                                                                                       
                            // })   
                            let rowsFormato = []
                            for(let disco of rows){
                                fs.readdir(disco.dir_imagenes, (error, imagenes) => {                                                                                     
                                    if(error) 
                                        console.log(error)
                                    else {
                                        disco.arrayImagenes = imagenes
                                        console.log(disco)
                                        rowsFormato.push(disco)
                                    }                                                  
                                })                                  
                            }                         
                            resolve(rowsFormato)
                        })
                    conn.release()
                })
                .catch(err => {
                    reject('error')
                    console.log("No se conecto: " + err);
                })
        })
    }
    this.buscar_imagenes = function(disco){
        return new Promise((resolve, reject) => {            
            fs.readdir(disco.dir_imagenes, (error, imagenes) => {                                                                                     
                if(error) 
                    reject([])
                else 
                    resolve(imagenes)                
            })  
        })               
    }
    this.insertar_catalogo = function (nuevo_catalogo) {
        // //MODULO NATIVO RUST
        let ruta_id = generar_ruta_id({
            "artista": nuevo_catalogo.artista,
            "titulo": nuevo_catalogo.infoCatalogo.titulo,
            "year": nuevo_catalogo.infoCatalogo.año
        })
        let datos_insertar = { ...ruta_id, ...nuevo_catalogo.infoCatalogo }
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
                        Object.values(datos_insertar))
                        .then(rows => {
                            resolve(ruta_id.ruta)
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