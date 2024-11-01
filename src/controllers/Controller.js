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
}

module.exports = Controller