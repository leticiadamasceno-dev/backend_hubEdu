

const GrupoDAO = require('../dao/grupo_dao');
const PerguntaDAO = require('../dao/perguntas_dao');
const PerguntaGrupoDAO = require('../dao/grupos_perguntas_dao');

module.exports = class GrupoController {
    static async criarGruposMockados(req, res) {
        try {
            await GrupoDAO.criarGrupos();
          console.log("Grupos criados com sucesso!");
        } catch (e) {
            console.log(e);
         //   res.status(400).send({ message: "Erro ao criar grupos", error: e });
        }
    }
    static async criarGrupos(req, res) {
        try {
            
            // console.log("Dados recebidos no body (antes de normalizar):", req.body);
    
            // Normalizar os campos (remover tabulações e espaços em branco)
            const nome = req.body.nome?.trim();
            const idMateria = req.body['idMateria\t']?.trim(); // Remove o caractere \t
    
            console.log("Nome normalizado:", nome);
            console.log("idMateria normalizado:", idMateria);
    
            if (!idMateria) {
                console.error("Erro: idMateria não foi enviado!");
                return res.status(400).json({ message: "O campo idMateria é obrigatório." });
            }
    
            if (!req.file) {
                console.error("Erro: foto não foi enviada!");
                return res.status(400).json({ message: "A foto é obrigatória para criar um grupo." });
            }
    
            const photoPath = `/uploads/${req.file.filename}`; // Caminho da foto
            console.log("Caminho da foto salvo:", photoPath);
    
            const modeloGrupo = {
                idMateria: idMateria,
                nome: nome,
                foto: photoPath,
            };
    
            // Log para verificar o modelo do grupo antes de salvar
            console.log("Modelo do grupo enviado ao DAO:", modeloGrupo);
    
            await GrupoDAO.criarGrupos(modeloGrupo);
    
            res.status(200).json({ message: "Grupo criado com sucesso!" });
        } catch (e) {
            console.error("Erro ao criar grupo:", e);
            res.status(400).json({ message: "Falha ao criar grupo", error: e });
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
