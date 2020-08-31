import { json } from 'body-parser'
const { Router } = require('express')
import classCatalogo from '../models/catalogodiscos.js'



const router = Router()

router.get('/catalogodiscos', (req,res) => {

  let instancia_catalogo = classCatalogo.getInstance()
  instancia_catalogo.obtener_todos()
    .then(data => {
      instancia_catalogo.get_mensaje()
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json('error')  
    })
})

//RecibirImagenes
router.post('/catalogodiscos', (req, res) =>{

  try{

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
  catch(err){
    console.log(err)
  }
})

module.exports = router

