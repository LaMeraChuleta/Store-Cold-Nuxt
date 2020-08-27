const express = require('express')
const bodyparser = require('body-parser')



const app = express()
const artistas = require('./routes/artistas.js')
const generos = require('./routes/generos.js')
const formato = require('./routes/formato.js')
const presentacion = require('./routes/presentacion.js')
const catalogodiscos = require('./routes/catalogodiscos.js')

app.use(bodyparser.json({ limit: '100mb'}) );       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  limit: '50mb', 
  extended: true, 
  parameterLimit: 50000,
}))

app.use(artistas)
app.use(generos)
app.use(formato)
app.use(presentacion)
app.use(catalogodiscos)
module.exports = app

if(require.main === module){

    const port = process.env.PORT || 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}