function Generos() {
    //Constructor
    const pooldb = require('../../mariadb/conexion.js')
    let mensaje = "hola encapsulado"

    this.obtener_todos = function () {
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("SELECT * FROM generos")
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
    this.insertar_genero = function (genero) {
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("INSERT INTO generos (nombre) VALUES(?)", Object.values(genero))
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

let Instacia_Generos = (function () {
    let instancia;
    function crear() {
        var generos = new Generos();
        return generos;
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
export default Instacia_Generos