const PerguntaGrupo = require('../models/grupos_perguntas');

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
}