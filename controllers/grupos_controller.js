

const GrupoDAO = require('../dao/grupo_dao');
const PerguntaDAO = require('../dao/perguntas_dao');
const PerguntaGrupoDAO = require('../dao/grupos_perguntas_dao');

module.exports = class GrupoController {
    static async criarGruposMockados(req, res) {
        try {
            // Passo 1: Exclua os registros dependentes
            await PerguntaGrupoDAO.excluirTodos(); // Remove registros de GrupoPerguntas
            await PerguntaDAO.excluirTodas(); // Remove registros de Perguntas

            // Passo 2: Agora recrie os grupos
            await GrupoDAO.criarGrupos();

            res.status(200).send({ message: "Grupos criados com sucesso!" });
        } catch (e) {
            console.log(e);
            res.status(500).send({ message: "Erro ao criar grupos", error: e });
        }
    }

    static async listarTodosGrupos(req, res) {
        try {
            const gruposRetornados = await GrupoDAO.buscarGrupos();
            res.status(200).send({ message: "Grupos retornados com sucesso", data: gruposRetornados });
        } catch (error) {
            res.status(400).send({ message: "Erro ao buscar grupos", error });
        }
    }
};
