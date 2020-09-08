const { Router } = require('express')
import classGeneros from '../models/catalogos/generos.js'

const router = Router()

router.get('/genero', (req, res) => {

  let instancia_generos = classGeneros.getInstance()
  instancia_generos.obtener_todos()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {

      res.status(500).json('error')
    })
})
router.post('/genero', (req, res) => {

  let instancia_generos = classGeneros.getInstance()
  instancia_generos.insertar_genero(req.body)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {

      res.status(500).json('error')
    })

})
module.exports = router