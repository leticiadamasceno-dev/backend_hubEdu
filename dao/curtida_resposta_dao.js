const Perguntas = require('../models/perguntas');
const Usuario = require('../models/usuario');
const Respostas = require('../models/respostas');
const CurtidaReposta = require('../models/curtida_resposta');

module.exports = class CurtidaRespostaDAO{
    static async adicionarCurtidaResposta(dadosCurtidaResposta){
        try {
            const retorno = await CurtidaReposta.create(dadosCurtidaResposta);
            return retorno;
          } catch (error) {
            console.error('Erro ao inserir pergunta na tabela de ligação:', error);
            throw error;  
          }
    }

    static async verificaExisteCurtida(idPergunta, idResposta, idUsuario){
      try{
        const retorno = await CurtidaReposta.findOne({
          where: {
            idPergunta: idPergunta, 
            idResposta: idResposta, 
            idUsuario: idUsuario
          }
        }
      );
        console.log(retorno);
        return retorno != null;
      }catch(e){
        throw e;
      }
    }
}