const PerguntaGrupo = require('../models/grupo_perguntas');
const Grupos = require('../models/grupo');
const Perguntas = require('../models/perguntas');

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

      static async buscarPerguntasGrupoPorID(grupoID){
        try{
          const grupo = await PerguntaGrupo.findByPk(grupoID, {
            include: {
              model: Perguntas,
              as: 'Perguntas'
            }
          });
          return grupo;
        }catch(error){
          console.error('Erro ao buscar perguntas:', error);
          throw error;
        }
      }
}