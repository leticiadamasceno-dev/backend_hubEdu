const Grupos = require('../models/grupo');
const GrupoPerguntas = require('../models/grupo_perguntas');
const Usuario = require('../models/usuario');
const Materia = require('../models/materias');

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

    static async criarGrupos(dadosgrupo){
        try {
            const grupoCriado = await Grupos.create(dadosgrupo); // Insere o grupo no banco de dados

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
                    as: 'Materia',
                    attributes: ['nome']
                }
            });

            return gruposRetornados;
        } catch (error) {
            console.log("falha ao buscar grupos", error);
        }
    }
}