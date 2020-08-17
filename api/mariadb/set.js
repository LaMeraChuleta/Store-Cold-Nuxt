const pooldb = require('./conexion.js')

export function setArtista(artista){

    return new Promise((resolve, reject) => {

        pooldb.getConnection()
        .then(conn => {
            conn. query("INSERT INTO artistas (nombre, pais) VALUES(?,?)", Object.values(artista))
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

export function setGenero(genero){

    return new Promise((resolve, reject) => {
        pooldb.getConnection()
        .then(conn => {
            conn. query("INSERT INTO generos (nombre) VALUES(?)", Object.values(genero))
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


export function setFormato(formato){

    return new Promise((resolve, reject) => {
        pooldb.getConnection()
        .then(conn => {
            conn. query("INSERT INTO formato (nombre) VALUES(?)", Object.values(formato))
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

export function setPresentacion(presentacion){

    return new Promise((resolve, reject) => {
        pooldb.getConnection()
        .then(conn => {
            conn. query("INSERT INTO presentacion (nombre) VALUES(?)", Object.values(presentacion))
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