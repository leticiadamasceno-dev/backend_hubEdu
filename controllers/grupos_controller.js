

const GrupoDAO = require('../dao/grupo_dao');
const PerguntaDAO = require('../dao/perguntas_dao');
const PerguntaGrupoDAO = require('../dao/grupos_perguntas_dao');

module.exports = class GrupoController {
    static async criarGruposMockados(req, res) {
        try {
            // Passo 1: Exclua os registros dependentes
           /*  await PerguntaGrupoDAO.excluirTodos(); // Remove registros de GrupoPerguntas
            await PerguntaDAO.excluirTodas(); // Remove registros de Perguntas */

            // Passo 2: Agora recrie os grupos
            await GrupoDAO.criarGrupos();

          console.log("Grupos criados com sucesso!");
        } catch (e) {
            console.log(e);
         //   res.status(400).send({ message: "Erro ao criar grupos", error: e });
        }
    }

    static async criarGrupos(req, res){
        try{
            /* const {idMateria, nome} = req.body;
            const dadosGrupo = {}; */
            GrupoDAO.criarGrupos(req.body)
            res.status(200).json({ message: "Grupo criado com sucesso!"});


        }catch(e){
            res.status(400).json({ message: "falha ao criar grupo"}, e);
        }
    }

    static async listarTodosGrupos(req, res) {
        try {
            const gruposRetornados = await GrupoDAO.buscarGrupos();
            res.status(200).json({ message: "Grupos retornados com sucesso", data: gruposRetornados });
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar grupos", error });
        }
    }
};
