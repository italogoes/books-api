class Controller {
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res){
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros()
            res.status(200).json(listaDeRegistros);
        } catch (error) {
            console.log(error)
        }
    }

    async criaNovo(req, res){
        const novosDados = req.body

        try {
            const foiCriado = await this.entidadeService.criaRegistro(novosDados)

            if(!foiCriado){
                // retorna erro
            }

            res.status(200).json({ message: "Registro criado com sucesso!" })
        } catch (error) {
            console.log(error)
        }
    }

    async atualiza(req, res){
        const { id } = req.params;
        const dadosAtualizados = req.body;

        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
            if(!foiAtualizado){
                return res.status(400).json({ message: "Registro nao foi atualizado."})
            }
            return res.status(200).json({ message: "Dados atualizados com sucesso!"})
        } catch (error) {
            res.status(400).json({ message: "Erro ao atualizados dados...", error})
        }
    }

    async deleta(req, res){
        const { id } = req.params

        try {
            const foiDeletado = await this.entidadeService.deletaRegistro(Number(id))
            return res.status(200).json({ message: "Registro excluido com sucesso" })
        } catch (error) {
            console.log(error)
        }
        
    }
}

module.exports = Controller