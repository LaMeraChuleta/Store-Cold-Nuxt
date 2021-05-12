import path from 'path'
import fs from 'fs'
import classCatalogo from '../models/catalogodiscos.js'
const { Router } = require('express')
const router = Router()
const rutaImagenes = 'C:\\StoreCold'
const multer  = require('multer')
//Manejo de Imagenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {    
    let pathSave = rutaImagenes + '\\' + req.params.artista + '\\' + req.params.id
    console.log(pathSave)    
    if(!fs.existsSync(pathSave)){
      fs.mkdirSync(pathSave, { recursive: true})
    }    
    cb(null, pathSave)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log(req.params);
    cb(null, file.fieldname  + '-' + uniqueSuffix + '.png')
  }
})
const upload = multer({ storage: storage }).array('imagenesDisco', 20)
//Rutas CatalogoDiscos
router.get('/catalogodiscos', (req, res) => {    
  classCatalogo
    .getInstance()
    .obtener_todos()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
  
})
router.post('/catalogodiscos', (req, res) => {
    classCatalogo.getInstance().insertar_catalogo(req.body)
      .then(data => res.status(200).json(data))    
      .catch(error => res.status(500).json(error))  
})
router.post('/catalogodiscos/imagenes/:artista/:id', (req, res) => {            
  upload(req,res,function(err) {        
    if(err) {
        return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
})
router.put('/catalogodiscos', (req, res) => {  
  classCatalogo.getInstance()
    .editar_catalogo(req.body.id, req.body.nuevoCatalogo, req.body.imagenes, req.body.dir_imagenes)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err))
})
router.get('/catalogodiscos/imagen/:artista/:id/:nombreImagen', (req,res) => {
  let pathFotos = path.format({
    dir: rutaImagenes + '\\' + req.params.artista.replace(/ /g, "") + '\\' + req.params.id,
    base: req.params.nombreImagen
  });
  res.download(pathFotos)
})
module.exports = router

