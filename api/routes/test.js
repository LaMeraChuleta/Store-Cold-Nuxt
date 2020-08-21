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

  
  //let base64String = req.body[1].replace(/^data:image\/\w+;base64,/, '');
  //console.log(base64String[0].split(',')[1])

  // let dataURI = base64String[0].replace(/^data:/, '');
 

  // const type = dataURI.match(/image\/[^;]+/);
  // const base64 = dataURI.replace(/^[^,]+,/, '');
  // const arrayBuffer = new ArrayBuffer(base64.length);
  // const typedArray = new Uint8Array(arrayBuffer);

  // for (let i = 0; i < base64.length; i++) {
  //     typedArray[i] = base64.charCodeAt(i);
  // }
  // console.log(type[0])
  // console.log(arrayBuffer)
  // console.log(typedArray)
  //blobd(base64String[0].split(',')[1],base64String[0].split(',')[0])
  try{

  
  let base64String = req.body
  guardar(base64String[0].split(',')[1])
  require("fs").writeFile("ou.txt", base64String[0].split(',')[1], 
    function(err, data) {
      if (err) {
          console.log('err', err);
      }
      console.log('success')
      res.json(req.body)
    }
  )
  }
  catch(err){
    console.log(err)
  }

  

})

module.exports = router

