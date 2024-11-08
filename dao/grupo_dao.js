const Grupos = require('../models/grupo');
const GrupoPerguntas = require('../models/grupos_perguntas');
const Usuario = require('../models/usuario');

module.exports = class GrupoDAO{
 
    static async buscarPublicacaoGrupo(usuarioId){
        try{
            const publicacoes = await GrupoPerguntas.findAll({
                attributes: ['descricao', 'dataPublicacao'],
                include:[
                    {
                        model: Usuario,
                        attributes: ['nome'],
                        as: 'Usuario' // alias para acessar o nome do autor 
                    },
                    {
                        model: Grupo,
                        attributes: [],
                        include:[
                            {
                                model: Usuario,
                                attributes: [],
                                where: {idUsuario: usuarioId}
                            }
                        ]
                    }
                ]
            });
            return publicacoes;
        }catch(e){
            console.log("-> falha ao buscar grupos ",e );
        }
    }
}