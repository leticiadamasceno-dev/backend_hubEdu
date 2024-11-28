const Respostas = require('../models/respostas');

module.exports = {
    inserirResposta: async (resposta) => {
        return await Respostas.create(resposta);
    },

    buscarRespostasPorPergunta: async (idPergunta) => {
        return await Respostas.findAll({
            where: { idPergunta },
            include: { association: 'Pergunta' }, // Inclui inf da perg, se necessário
        });
    },

    buscarRespostasPorUsuario: async (idUsuario) => {
        return await Respostas.findAll({ where: { idUsuario } });
    },
};
