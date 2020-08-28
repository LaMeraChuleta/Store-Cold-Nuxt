function Catalogo() {
    //Constructor
    const pooldb = require('../mariadb/conexion')
    const { generar_ruta_id } = require('../imagenes/lib/index.js')
    let mensaje = "hola encapsulado"

    this.obtener_todos = function() {

        return new Promise((resolve,reject) =>{
            pooldb.getConnection()
             .then(conn => {
                 conn.query("SELECT * FROM catalogo")
                 .then(rows => {
                   delete rows['meta']
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
    this.insertar_catalogo = function(nuevo_catalogo){

        //MODULO NATIVO RUST
        let ruta_id = generar_ruta_id(nuevo_catalogo.img, {
            "artista": nuevo_catalogo.artista,
            "titulo": nuevo_catalogo.infoCatalogo.titulo,
            "year": nuevo_catalogo.infoCatalogo.año
        })
        let datos_insertar = { ...ruta_id, ...nuevo_catalogo.infoCatalogo }

        return new Promise((resolve, reject) => {
            pooldb.getConnection()
            .then(conn => {
                conn.query(`INSERT INTO catalogo 
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
                    precio) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                    Object.values(datos_insertar))
                .then(rows => {
                    resolve(rows)
                })
                conn.release()
            })
            .catch(error => {
                reject(error)
                console.log('error' + error)
            })
        }) 
    }
    this.get_mensaje = function(){
        console.log(mensaje)
    }
    //METODOS PRIVADOS

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