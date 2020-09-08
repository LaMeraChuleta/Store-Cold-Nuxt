function Artistas() {
    //Constructor
    const pooldb = require('../../mariadb/conexion.js')
    let mensaje = "hola encapsulado"

    this.obtener_todos = function () {

        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("SELECT * FROM artistas")
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
    this.insertar_artista = function (artista) {

        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("INSERT INTO artistas (nombre, pais) VALUES(?,?)", Object.values(artista))
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
    this.get_mensaje = function () {
        console.log(mensaje)
    }
}

let Instacia_Artista = (function () {

    let instancia;

    function crear() {
        var artista = new Artistas();
        return artista;
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
export default Instacia_Artista