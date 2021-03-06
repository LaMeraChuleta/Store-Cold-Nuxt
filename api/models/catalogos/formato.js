function Formato() {
    //Constructor
    const pooldb = require('../../mariadb/conexion.js')
    let mensaje = "hola encapsulado"

    this.obtener_todos = function () {
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("SELECT * FROM formato")
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
    this.insertar_formato = function (formato) {
        return new Promise((resolve, reject) => {
            pooldb.getConnection()
                .then(conn => {
                    conn.query("INSERT INTO formato (nombre) VALUES(?)", Object.values(formato))
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

let Instacia_Formato = (function () {
    let instancia;
    function crear() {
        var formato = new Formato();
        return formato;
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
export default Instacia_Formato