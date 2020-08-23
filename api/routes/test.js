import { getArtistas, getGeneros, getFormatos, getPresentaciones } from '../mariadb/get.js'
import { setArtista, setGenero, setFormato, setPresentacion } from '../mariadb/set.js'
const { Router } = require('express')
const { guardar, hello }  = require('../imagenes/lib/index.js')


const router = Router()

// Test route
router.get('/artista', (req, res) => {

  getArtistas()
  .then(data => { 
    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).json('error')  
  })
})
router.post('/artista',(req,res) => {

  setArtista(req.body)
  .then(data => {

    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).jsonp(error) 
  })

})
// //CONTROLADOR CATALOGO GENEROS
router.get('/genero', (req, res) => {

  getGeneros()
  .then(data => { 

    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).jsonp(error)  
  })
})
router.post('/genero',(req,res) => {

  setGenero(req.body)
  .then(data => {

    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).jsonp(error) 
  })

})
//CONTROLADOR CATALOGO FORMATO
router.get('/formato', (req, res) => {

  getFormatos()
  .then(data => { 

    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).jsonp(error)  
  })
})
router.post('/formato',(req,res) => {

  setFormato(req.body)
  .then(data => {

    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).jsonp(error) 
  })

})
//CONTROLADOR CATALOGO PRESENTACION
router.get('/presentacion', (req, res) => {

  getPresentaciones()
  .then(data => { 

    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).jsonp(error)  
  })
})
router.post('/presentacion',(req,res) => {

  setPresentacion(req.body)
  .then(data => {

    res.status(200).json(data)
  })
  .catch(error => {

    res.status(500).jsonp(error) 
  })

})

//RecibirImagenes
router.post('/upload', (req, res) =>{

  try{

    let imagenes = req.body.img
    guardar(imagenes, {
      artista: req.body.artista,
      titulo: req.body.newItem.titulo,
      year: req.body.newItem.año
    }) 
    console.log('listo!')
    res.end('Ok') 
  
  }
  catch(err){
    console.log(err)
  }

  

})

module.exports = router

