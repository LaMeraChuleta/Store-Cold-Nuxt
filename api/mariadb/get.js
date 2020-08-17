const pooldb = require('./conexion.js')

export function getArtistas(){

  return new Promise((resolve,reject) =>{
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

export function getGeneros(){
  
  return new Promise((resolve,reject) =>{
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
    });
  })
}

export function getFormatos(){
  
  return new Promise((resolve,reject) =>{
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
    });
  })
}

export function getPresentaciones(){
  
  return new Promise((resolve,reject) =>{
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
    });
  })
}


