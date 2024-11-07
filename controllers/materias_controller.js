const MateriasDAO = require('../dao/materias_dao');

module.exports = class MateriasController{
    static async criarMateriasMockadas(req,res){
        try{
            await MateriasDAO.inserirMaterias();
            
        }catch(e){
           console.log(e)
        }
    }
}