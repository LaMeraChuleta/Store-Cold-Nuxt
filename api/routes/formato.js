const { Router } = require('express')
import classFormatos from '../models/catalogos/formato.js'

const router = Router()

router.get('/formato', (req, res) => {

  let instancia_formatos = classFormatos.getInstance()
  instancia_formatos.obtener_todos()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {

      res.status(500).json('error')
    })
})
router.post('/formato', (req, res) => {

  let instancia_formatos = classFormatos.getInstance()
  instancia_formatos.insertar_formato(req.body)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {

      res.status(500).json('error')
    })
})
module.exports = router