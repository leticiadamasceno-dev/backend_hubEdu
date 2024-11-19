const Perguntas = require('../models/perguntas');

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


  
    
}