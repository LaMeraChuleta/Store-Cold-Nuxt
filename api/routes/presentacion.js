const { Router } = require('express')
import classPresentacion from '../models/catalogos/presentacion.js'
const router = Router()

router.get('/presentacion', (req, res) => {
  classPresentacion.getInstance().obtener_todos()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})
router.post('/presentacion', (req, res) => {
  classPresentacion.getInstance().insertar_presentacion(req.body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})
module.exports = router