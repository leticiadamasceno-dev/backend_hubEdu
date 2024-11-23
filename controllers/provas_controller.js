const ProvasDAO = require('../dao/provas_dao');

module.exports = class ProvasController{
    static async criarProva(req, res){
        try{
            const {idMateria, idUsuario, dataHora} = req.body;
            var modeloProva = {
                idMateria, 
                idUsuario,
                dataHora,
            }
            const provaCadastrada = await ProvasDAO.inserirProva(modeloProva);
            res.status(200).send({message: "Prova cadastrada com sucesso!", data: provaCadastrada})
        }catch(e){
            res.status(400).send({message: "Prova não foi cadastrada", data: null, erro: e});

        }
    }

    static async buscarProvas(req,res){
        try{
            const {idUsuario} = req.body;
            const todasProva = await ProvasDAO.buscarProva(idUsuario);
            res.status(200).send({message: "todas provas encontradas", data: todasProva});
        }catch(e){
            res.status(400).send({message: "Não foi possível buscar provas", data: null, error: e});

        }
    }
}