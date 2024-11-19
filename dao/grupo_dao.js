const Grupos = require('../models/grupo');
const GrupoPerguntas = require('../models/grupo_perguntas');
const Usuario = require('../models/usuario');
const Materia = require('../models/materias')

module.exports = class GrupoDAO{
 
    static async buscarPublicacaoGrupo(usuarioId){
        try{
            const publicacoes = await GrupoPerguntas.findAll({
                attributes: ['descricao', 'dataPublicacao'],
                include:[
                    {
                        model: Usuario,
                        attributes: ['nome'],
                    },
                    {
                        model: Materia,
                        attributes:['nome'],
                    }
                ]
            });
            return publicacoes;
        }catch(e){
            console.log("-> falha ao buscar grupos ",e );
        }
    }

    static async criarGrupos(){
        try {
            // Sincronize o modelo com o banco de dados
            await Grupos.sync({ force: true }); // force: true recria a tabela
        
            // Insira os valores iniciais
            const valoresIniciais = [
              {id: 1, idMateria: 1, nome: 'Materia português',},
              {id: 2, idMateria: 2, nome: 'Foco matemática'},
              {id: 3, idMateria: 3, nome: 'Enciclopédia história'}
            ];
            
            // Inserir em massa os valores iniciais
            await Grupos.bulkCreate(valoresIniciais);
            console.log('Tabela de valores de grupos inseridos');
          } catch (error) {
            console.error('Erro ao criar a tabela:', error);
          }
    }

    static async buscarGrupos(grupo){
        try {
            const gruposRetornados = await Grupos.findAll({
                include: {
                    model: Materia,
                    attributes: ['nome']
                }
            });

            return gruposRetornados;
        } catch (error) {
            console.log("falha ao buscar grupos", error);
        }
    }
}