const { Router } = require('express')
import classArtista from '../models/catalogos/artistas.js'
const router = Router()

router.get('/artista', (req, res) => {
  classArtista.getInstance().obtener_todos()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})
router.post('/artista', (req, res) => {
  classArtista.getInstance().insertar_artista(req.body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json('error'))
})
module.exports = router