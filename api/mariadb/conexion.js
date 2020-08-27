const mariadb = require('mariadb')

const pooldb = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'VacaLoca',
    database: 'storecolddb'
})

module.exports = pooldb