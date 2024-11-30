const RespostasDAO = require('../dao/respostas_dao');
//const CurtidaRepostaDAO = require('../dao/curtida_resposta_dao');

module.exports = class RespostasController {

    static async criarResposta(req, res) {
        try {
            const { idPergunta, conteudo, idUsuario } = req.body;
            
            const foto = req.file ? `/uploads/${req.file.filename}` : null;
            if (!idPergunta || !conteudo || !idUsuario) {
                return res.status(400).json({
                    message: 'Campos obrigatórios: idPergunta, conteudo, idUsuario, foto.',
                });
            }

            const novaResposta = await RespostasDAO.inserirResposta({
                idPergunta,
                conteudo,
                idUsuario,
                foto,
            });

            res.status(201).json({
                message: 'Resposta criada com sucesso.',
                data: novaResposta,
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Erro ao criar resposta.' });
        }
    }

    static async buscarRespostasPorPergunta(req, res) {
        try {
            const { idPergunta } = req.params;

            const respostas = await RespostasDAO.buscarRespostasPorPergunta(idPergunta);
            if (respostas.length === 0) {
                return res.status(404).json({
                    message: 'Nenhuma resposta encontrada para a pergunta.',
                });
            }

            res.status(200).json({
                message: 'Respostas encontradas.',
                data: respostas,
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Erro ao buscar respostas.' });
        }
    }

    static async buscarRespostasPorUsuario(req, res) {
        try {
            const { idUsuario } = req.params;

            const respostas = await RespostasDAO.buscarRespostasPorUsuario(idUsuario);
            if (respostas.length === 0) {
                return res.status(404).json({
                    message: 'Nenhuma resposta encontrada para o usuário.',
                });
            }

            res.status(200).json({
                message: 'Respostas encontradas.',
                data: respostas,
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Erro ao buscar respostas por usuário.' });
        }
    }

    static async curtirReposta(req, res){
        try{
            const {idPergunta, idUsuario, idResposta} = req.body;
//adicionar na tabela de curtidasRepostas para os usuários verem quem curtiu esta resposta 
        const modeloCurtida = {
            idPergunta, 
            idUsuario, 
            idResposta
        }
        const curtidaExiste = await CurtidaRespostaDAO.verificaExisteCurtida(idPergunta,idResposta,idUsuario );
        console.log(`curtida existe `, curtidaExiste);
       if(curtidaExiste) {
        res.status(200).json({
            message: 'Esta resposta já obteve sua aprovação',
            data: null,
        });
        return;
       }
        await CurtidaRepostaDAO.adicionarCurtidaResposta(modeloCurtida);
        res.status(200).json({
            message: 'Resposta curtida',
            data: null,
        });
        }catch(e){
            console.error(e);
            res.status(500).json({ message: 'Não foi possível curtir resposta' });
        }
    }
};
