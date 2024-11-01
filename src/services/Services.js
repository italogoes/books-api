const dataSource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }
    
    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async pegarUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id)
    }

    async atualizaRegistro(dadosAtualizados, id){
        const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: {
                id: id
            }
        })

        if(listadeRegistrosAtualizados[0] === 0){
            return false
        }
        return true;
    }
}

module.exports = Services;
