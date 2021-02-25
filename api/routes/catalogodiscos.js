import path from 'path'
import fs from 'fs'
import classCatalogo from '../models/catalogodiscos.js'
const router = Router()
const { Router } = require('express')
const rutaImagenes = 'C:\\StoreCold'
const multer  = require('multer')
//Manejo de Imagenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {    
    let pathSave = rutaImagenes + '\\' + req.params.artista + '\\' + req.params.id    
    if(!fs.existsSync(pathSave)){
      fs.mkdirSync(pathSave, { recursive: true})
    }    
    cb(null, pathSave)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname  + '-' + uniqueSuffix + '.png')
  }.
  filter
})
const upload = multer({ storage: storage })
//Rutas CatalogoDiscos
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
    let clave = instancia_catalogo.generar_catalogo_id(req.body)
    console.log(clave)
    res.status(200).json(clave)
  }
  catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})
router.post('/catalogodiscos/imagenes/:artista/:id', upload.single('imagenesDisco'), (req, res) => {        
    res.status(200).json({})
  // try {
  //   let instancia_catalogo = classCatalogo.getInstance()
  //   instancia_catalogo.insertar_catalogo(req.body)
  //     .then(data => {
  //       console.log(data)                             
  //       res.status(200).json(data)
  //     })
  //     .catch(err => {
  //       res.status(500).json('error')
  //     })
  // }
  // catch (err) {
  //   console.log(err)
  // }
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
  let pathFotos = path.format({
    dir: rutaImagenes + '\\' + req.params.artista.replace(/ /g, "") + '\\' + req.params.id,
    base: req.params.nombreImagen
  });
  res.download(pathFotos)
})
router.get('/example', (req, res, next) => {
  let instancia_catalogo = classCatalogo.getInstance()
  instancia_catalogo.get_mensaje()
})
module.exports = router

