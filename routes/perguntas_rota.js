const perguntaController = require('../controllers/perguntas_controller');
const router = require('express').Router();

router.post('/criarPergunta', perguntaController.criarPergunta);

module.exports = router