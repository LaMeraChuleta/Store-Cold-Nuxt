const pooldb = require('./conexion.js')


export function getArtistas(){

    pooldb.getConnection()
    .then(conn => {
        conn.query("SELECT * FROM artista")
        .then(rows => {
        console.log(rows)
      })
      conn.release(); //release to pool
    })
    .catch(err => {
      console.log("No se conecto: " + err);
    });
}

