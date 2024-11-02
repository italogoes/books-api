const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController.js')

const categoriaController = new CategoriaController()

const router = Router()

router.get('/categoria', (req, res) => categoriaController.pegaTodos(req, res))

module.exports = router