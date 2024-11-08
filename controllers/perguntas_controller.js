const GrupoDAO = require('../dao/grupo_dao');
const PerguntaDAO = require('../dao/perguntas_dao');
const PerguntaGrupoDAO = require('../dao/grupos_perguntas_dao');

module.exports = class PerguntasController{
    static async criarPergunta(req,res){
        console.log("entrou aqui")
        try{
            const {titulo, descricao, idMateria, idDificuldade, idUrgencia, idUsuario, idGrupo} = req.body;
            const pergunta = {
                titulo,
                descricao,
                idMateria,
                idDificuldade,
                idUrgencia,
                idUsuario,
                idGrupo
            };
            var perguntaCriada = await PerguntaDAO.inserirPergunta(pergunta);
            var modeloPerguntaGrupo = {
                idPergunta: perguntaCriada.id,
                idGrupo: idGrupo,
                idUsuario: idUsuario

            }
          
            await PerguntaGrupoDAO.inserirPerguntaGrupo(modeloPerguntaGrupo);
            console.log("id pegunta",perguntaCriada.id);
            
            res.status(201).json("pergunta realizada");
        }catch(e){
            console.log(e);
            res.status(400).json(e);
        }
    }
}