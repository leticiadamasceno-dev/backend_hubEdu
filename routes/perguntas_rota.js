const perguntaController = require('../controllers/perguntas_controller');
const router = require('express').Router();

router.post('/criarPergunta', perguntaController.criarPergunta);
router.post('/buscarPerguntas', perguntaController.buscarPerguntasPorGrupo);
router.post('/criarClassificacaoPergunta', perguntaController.criarClassificacaoPergunta);
router.post('/criarUrgenciaPergunta', perguntaController.criarUrgenciaPergunta)

module.exports = router