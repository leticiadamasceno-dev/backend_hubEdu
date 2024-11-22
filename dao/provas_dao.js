const Prova = require('../models/provas');

module.exports = class ProvasDAO{
    static async inserirProva(prova){
        try{
           const provaCadastradada = await Prova.create(prova);
            return provaCadastradada;
        }catch(error){
            throw error;
        }
    }
}