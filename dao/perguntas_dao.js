const Perguntas = require('../models/perguntas');
const urgenciaPergunta = require('../models/urgencia_pergunta');
const classificaoPergunta = require('../models/classificacao_dificuldade_pergunta');
const Respostas = require('../models/respostas');
const Usuario = require('../models/usuario');
const GrupoPergunta = require('../models/grupo_perguntas');
const Grupo = require('../models/grupo');
const GrupoUsuario = require('../models/grupo_usuario');
const Materia = require('../models/materias');
const sequelize = require('../db/database'); // Importa o objeto sequelize configurado no arquivo database.js


module.exports = class PerguntasDAO{
    static async inserirPergunta(perguntaUsuario){
        try {
            const pergunta = await Perguntas.create(perguntaUsuario); // Insere o usuário no banco de dados
            return pergunta;
          } catch (error) {
            console.error('Erro ao inserir pergunta:', error);
            throw error;
          }
    }

    static async  criarClassificaoPergunta(classificacao){
      try{
        const classificacaoRetorno = await classificaoPergunta.create(classificacao); 
        console.log(classificacaoRetorno);
        return classificacaoRetorno;
      }catch(e){
        console.error('Erro ao inserir classificacao pergunta:', error);
        throw error;
      }
    }

    static async criarUrgenciaPergunta(urgencia){
      try{
        const retornoUrgencia = await urgenciaPergunta.create(urgencia); 
        return retornoUrgencia;
      }catch(e){
        console.error('Erro ao inserir urgencia pergunta:', e);
        throw e;
      }
    }
  
    static async buscarPerguntasComRespostas(idPergunta){
      try{
        const retornoPergunta = await Perguntas.findOne({
          where: {id: idPergunta},
          include: [
            {
              model: Grupo,
              as: 'Grupos',
            }
          ]

        })
        return retornoPergunta;
      }catch(e){
        console.log(e);
        throw e;
      }
    }


  //pegar os grupos que o usuario esta participando
  //buscar os ids do grupo
  //buscar as perguntas que estão vinculadas ao id do grupo do usuario

    static async buscarPerguntasPorGrupoParticipado(idUsuario){
      let retorno = [];
      let gruposParticipado = [];
      try{
        const gruposParticipados = await GrupoUsuario.findAll({
          include:{
            model: GrupoPergunta,
            as: 'GrupoPergunta',
            required: false,
            attributes: ['idGrupo', 'idPergunta'],
          },
          where: { idUsuario: idUsuario }
        });
      if(gruposParticipados.length == 0){
        return [];
      }
        for(var i = 0; i < gruposParticipados.length; i++){
          let idGrupo = gruposParticipados[i].GrupoPergunta.dataValues.idGrupo;   
          const retorno = await GrupoPergunta.findAll({
                      where: { idGrupo: idGrupo }
                    });
          gruposParticipado.push(retorno)
        }
       
       
  for(var i = 0; i < gruposParticipado[0].length; i++){
    let idPergunta = gruposParticipado[0][i].dataValues.idPergunta ;
      const perguntas = await GrupoPergunta.findAll({
        include: [
          {
          model: Perguntas,
          as: 'Perguntas',
          required: true,
          include: {
            model: Materia,
            as: 'Materia',
          }
        },
        {
          model: Grupo,
          as: 'Grupo',
          required: true
        }          
        ],
        where: {
          idPergunta: idPergunta,
        },
        });
        retorno.push(perguntas)
        
      }
        return retorno;
      }catch(err){
        console.log(err);
        throw err;
      }
    }
}