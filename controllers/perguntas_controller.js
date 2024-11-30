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
            console.log("---->> modelo ",pergunta);
          
            await PerguntaGrupoDAO.inserirPerguntaGrupo(modeloPerguntaGrupo);
            console.log("id pegunta",perguntaCriada.id);
            
            res.status(201).json("pergunta realizada");
        }catch(e){
            console.log(e);
            res.status(400).json(e);
        }
    }

    static async buscarPerguntasPorGrupo(req,res){
        try{
            const {idGrupo} = req.body;
           console.log(idGrupo);
            var perguntas = await PerguntaGrupoDAO.buscarPerguntasGrupoPorID(idGrupo);
            if(perguntas.length == 0){
                res.status(200).send({ message: "Nenhum grupo encontrado", data: null});
                return;
            }
            res.status(200).send({ message: "retornos", data: perguntas }); // Exemplo de status válido

        }catch(e){
            res.status(400).json("não foi possível buscar perguntas");
            console.log(e);
        }
    }

    static async buscarPerguntasPorUsuario(req, res){
        try{
           const {idUsuario} = req.body;
           var perguntas = await PerguntaGrupoDAO.buscarPerguntaUsuario(idUsuario);
           if(perguntas.length == 0){
            res.status(200).send({ message: "Nenhum grupo encontrado", data: null});
            return;
        }
        res.status(200).send({ message: "perguntas encontradas", data: perguntas }); // Exemplo de status válido

        }catch(e){
            res.status(400).json("Não foi possível buscar perguntas");
            console.log(e);
        }
    }

    static async criarClassificacaoPergunta(req,res){
        try{
        await PerguntaDAO.criarClassificaoPergunta(req.body);
        res.status(200).send({ message: "classificacao criada com sucesso"}); // Exemplo de status válido
        }catch(e){
            res.status(400).json("não foi possível criar classificacao de pergunta");

        }
    }

    static async criarUrgenciaPergunta(req,res){
        try{
            await PerguntaDAO.criarUrgenciaPergunta(req.body);
            res.status(200).json("Nivel de urgencia criada!");
        }catch(e){
            console.log(e);
            res.status(400).send({ message: "Não foi possível criar nivel de urgencia"});
        }
    } 

    static async buscarPerguntaComRespostas(req,res){
        try{
            const {idPergunta} = req.body;
            const retornoPergunta = await PerguntaDAO.buscarPerguntasComRespostas(idPergunta);

            res.status(200).json({
                message: 'Pergunta encontradas.',
                data: retornoPergunta,
            });
        }catch(e){
            res.status(400).json({
                message: 'Não foi possível buscar pergunta com resposta',
                data: null,
            });
        }
    }
}