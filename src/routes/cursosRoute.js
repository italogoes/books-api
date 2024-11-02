const { Router } = require('express')
const CursoController = require('../controllers/CursoController.js')

const cursoController = new CursoController()

const router = Router()

router.get('/curso', (req, res) => cursoController.pegaTodos(req, res))

module.exports = router