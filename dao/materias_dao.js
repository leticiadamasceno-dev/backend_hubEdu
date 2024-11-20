const Materias = require('../models/materias');

module.exports = class MateriasDAO{
   static async inserirMaterias(){
    try {
        // Sincronize o modelo com o banco de dados
        await Materias.sync(); // force: true recria a tabela
        const count = await Materias.count();
        if (count === 0) {
// Insira os valores iniciais
const valoresIniciais = [
  {nome: 'Português',},
  {nome: 'Matemática'},
  {nome: 'História'}
];

// Inserir em massa os valores iniciais
await Materias.bulkCreate(valoresIniciais);
console.log('Tabela criada e valores iniciais inseridos!');
        }
        
      } catch (error) {
        console.error('Erro ao criar a tabela:', error);
      }
   }
}