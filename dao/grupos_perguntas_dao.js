const PerguntaGrupo = require('../models/grupo_perguntas');
const Grupo = require('../models/grupo');
const Perguntas = require('../models/perguntas');
const Usuario = require('../models/usuario');
const ClassificaoDificuldadePergunta = require('../models/classificacao_dificuldade_pergunta');
const Urgencia = require('../models/urgencia_pergunta');
const Respostas = require('../models/respostas');
const Materia = require('../models/materias');

module.exports = class GruposPerguntasDAO{
    static async inserirPerguntaGrupo(dadosPergunta) {
        try {
          const pergunta = await PerguntaGrupo.create(dadosPergunta); // Insere o usuário no banco de dados
          return pergunta;
        } catch (error) {
          console.error('Erro ao inserir pergunta na tabela de ligação:', error);
          throw error;  
        }
      }

      static async buscarPerguntasGrupoPorID(idGrupo){
        try{
          const retorno = await PerguntaGrupo.findAll(({
            where:{
              idGrupo
            },
            include: [
              {
                model: Grupo,
                as: 'Grupo',
                attributes: ['nome']
              },
              {
                model: Usuario,
                as: 'Usuario',
                attributes: ['nome']
              },
              {
                model: Perguntas,
                include: [
                  {
                   model: ClassificaoDificuldadePergunta,
                   as: 'Dificuldade',
                   attributes: ['id', 'descricao']
                  },
                  {
                    model: Urgencia,
                    as: 'Urgencia',
                    attributes: ['id', 'descricao']
                   },
                 ],
                as: 'Perguntas',
                attributes: ['titulo', 'descricao']
              }
            ]
          }));
          return retorno;
        }catch(error){
          console.error('Erro ao buscar perguntas:', error);
          throw error;
        }
      }

    static async buscarPerguntaUsuario(idUsuario){
        try{
       var retorno = await PerguntaGrupo.findAll({
            where:{
              idUsuario
            },
            include: [
              {
                model: Grupo,
                as: 'Grupo',
                attributes: ['nome']
              },
              {
                model: Usuario,
                as: 'Usuario',
                attributes: ['nome']
              },
              {
                model: Perguntas,
                include: [
                  {
                   model: ClassificaoDificuldadePergunta,
                   as: 'Dificuldade',
                   attributes: ['id', 'descricao']
                  },
                  {
                    model: Urgencia,
                    as: 'Urgencia',
                    attributes: ['id', 'descricao']
                   },
                   {
                    model: Materia, 
                    as: 'Materia',
                    attributes: ['id', 'nome']
                   }
                 ],
                as: 'Perguntas',
                attributes: ['titulo', 'descricao']
              },
              
            ]
          });
          return retorno;
        }catch(e){
          console.log('Erro ao buscar perguntas por usuário:', e);
          throw e;
        }
      }
}