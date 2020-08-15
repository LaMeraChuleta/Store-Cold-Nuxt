import { getArtistas } from '../mariadb/get.js'
const { Router } = require('express')

const router = Router()

// Test route
router.get('/test', (req, res) => {

  getArtistas()
  res.end('Test API!')
})

module.exports = router