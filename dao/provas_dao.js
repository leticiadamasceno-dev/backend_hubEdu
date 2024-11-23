const Prova = require('../models/provas');
const Usuario = require('../models/usuario');
const Materia = require('../models/materias');

module.exports = class ProvasDAO{
    static async inserirProva(prova){
        try{
           const provaCadastradada = await Prova.create(prova);
            return provaCadastradada;
        }catch(error){
            throw error;
        }
    }
    static async buscarProva(idUsuario){
        try{
            const todasProvas = await Prova.findAll(
                {
                    where: {idUsuario}, 
                    include: [
                        {
                            model: Usuario,
                            as: 'Usuario',
                            attributes: ['nome']
                          },
                          {
                            model: Materia,
                            as: 'Materia',
                            attributes: ['nome']
                          }
                    ]}, 
                
            
            );
            return todasProvas;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}