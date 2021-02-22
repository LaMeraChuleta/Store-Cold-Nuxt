const { Router } = require('express')
import classCatalogo from '../models/catalogodiscos.js'
import path from 'path'
const router = Router()
const RUTAIMAGENES = 'C:\\StoreCold'
router.get('/catalogodiscos', (req, res) => {
  let instancia_catalogo = classCatalogo.getInstance()  
  instancia_catalogo.obtener_todos()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})
router.post('/catalogodiscos', (req, res) => {
  try {
    let instancia_catalogo = classCatalogo.getInstance()
    instancia_catalogo.insertar_catalogo(req.body)
      .then(data => {
        console.log(data)                             
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json('error')
      })
  }
  catch (err) {
    console.log(err)
  }
})
router.put('/catalogodiscos', (req, res) => {
  try {
    let instancia_catalogo = classCatalogo.getInstance()
    instancia_catalogo.editar_catalogo(req.body.id, req.body.nuevoCatalogo, req.body.imagenes, req.body.dir_imagenes)
      .then(data => {      
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  catch (err) {
    console.log(err)
  }
})
router.get('/catalogodiscos/imagen/:artista/:id/:nombreImagen', (req,res) => {
  console.log(req.params.artista.replace(/ /g, ""))
  let pathFotos = path.format({
    dir: RUTAIMAGENES + '\\' + req.params.artista.replace(/ /g, "") + '\\' + req.params.id,
    base: req.params.nombreImagen
  });
  console.log(pathFotos)
  res.download(pathFotos)
})
router.get('/example', (req, res, next) => {
  let instancia_catalogo = classCatalogo.getInstance()
  instancia_catalogo.get_mensaje()
})
module.exports = router

