const Perguntas = require('../models/perguntas');
const urgenciaPergunta = require('../models/urgencia_pergunta');
const classificaoPergunta = require('../models/classificacao_dificuldade_pergunta');

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
  
    
}