const Controller = require("./Controller");
const MatriculaServices = require('../services/MatriculaServices.js')

const matriculaService = new MatriculaServices()

class MatriculaController extends Controller{
    constructor(){
        super(matriculaService)
    }
}

module.exports = MatriculaController