const Materias = require('../models/materias');

module.exports = class MateriasDAO{
   static async inserirMaterias(){
    try {
        // Sincronize o modelo com o banco de dados
        await Materias.sync({ force: true }); // force: true recria a tabela
    
        // Insira os valores iniciais
        const valoresIniciais = [
          {id: 1, nome: 'Português',},
          {id: 2, nome: 'Matemática'},
          {id: 3, nome: 'História'}
        ];
        
        // Inserir em massa os valores iniciais
        await Materias.bulkCreate(valoresIniciais);
        console.log('Tabela criada e valores iniciais inseridos!');
      } catch (error) {
        console.error('Erro ao criar a tabela:', error);
      }
   }
}