const express = require('express')
const bodyparser = require('body-parser')



const app = express()

const test = require('./routes/test.js')

app.use(bodyparser.json({ limit: '100mb'}) );       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  limit: '50mb', 
  extended: true, 
  parameterLimit: 50000,
}))

app.use(test)

module.exports = app

if(require.main === module){

    const port = process.env.PORT || 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}