const Controller = require("./Controller");
const CursoServices = require('../services/CursoServices.js')

const cursoService = new CursoServices()

class CursoController extends Controller{
    constructor(){
        super(cursoService)
    }
}

module.exports = CursoController