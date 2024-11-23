const perguntaController = require('../controllers/perguntas_controller');
const verificarToken = require('../helpers/verificar_token');
const router = require('express').Router();

router.post('/criarPergunta', verificarToken, perguntaController.criarPergunta);
router.post('/buscarPerguntas',verificarToken, perguntaController.buscarPerguntasPorGrupo);
router.post('/criarClassificacaoPergunta', verificarToken, perguntaController.criarClassificacaoPergunta);
router.post('/criarUrgenciaPergunta', verificarToken, perguntaController.criarUrgenciaPergunta)
router.post('/buscarPerguntaPorUsuario', verificarToken, perguntaController.buscarPerguntasPorUsuario);
module.exports = router