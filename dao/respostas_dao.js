const sequelize = require('../db/database');
const Respostas = require('../models/respostas');

module.exports = {
    inserirResposta: async (resposta) => {
        return await Respostas.create(resposta);
    },

    //quando buscar as respostas tb deve trazer as curtidas, fazendo um count na tabela de ligacao curtidaPergunta 
    buscarRespostasPorPergunta: async (idPergunta) => {
        return await Respostas.findAll({
            where: { idPergunta },
            include: [
                { association: 'Pergunta' },
                {
                    model: Usuario,
                    as: 'Usuario',
                    attributes: ['nome']
                  },
            ], // Inclui inf da perg, se necessário
        });
    },

    buscarRespostasPorUsuario: async (idUsuario) => {
        return await Respostas.findAll({ where: { idUsuario } });
    },

    adicionarCurtida: async (idPergunta, curtida) => {
        return await Respostas.update({curtida: sequelize.literal(`curtidas + ${curtida}`)}, {where: {id: idPergunta}})
    }
};
