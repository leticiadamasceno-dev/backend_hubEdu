const GrupoDAO = require('../dao/grupo_dao');
const PerguntaDAO = require('../dao/perguntas_dao');
const PerguntaGrupoDAO = require('../dao/grupos_perguntas_dao');

module.exports = class GrupoController{
    static async criarGruposMockados(req,res){
        try{
            await GrupoDAO.criarGrupos();
            
        }catch(e){
           console.log(e)
        }
    }


    static async listarTodosGrupos(req,res){
        try{
          const gruposRetornados = await GrupoDAO.buscarGrupos();
          res.status(200).send({ message: "retornos", data: gruposRetornados }); // Exemplo de status válido
        }catch(error){
            res.status(400).send({ message: "error", data: error }); // Exemplo de status válido
        }
    }
}