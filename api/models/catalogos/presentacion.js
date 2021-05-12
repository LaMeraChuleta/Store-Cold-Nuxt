function Presentacion() {
    //Constructor
    const pooldb = require('../../mariadb/conexion.js')
    let mensaje = "hola encapsulado"

    this.obtener_todos = function () {
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("SELECT * FROM presentacion")
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
    this.insertar_presentacion = function (presentacion) {
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("INSERT INTO presentacion (nombre, id_formato) VALUES(?,?)", Object.values(presentacion))
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

let Instacia_Presentacion = (function () {
    let instancia;
    function crear() {
        var presentacion = new Presentacion();
        return presentacion;
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
export default Instacia_Presentacion