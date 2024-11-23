const router = require('express').Router();
const provaController = require('../controllers/provas_controller');
const verificarToken = require('../helpers/verificar_token');

router.post('/criarProva', verificarToken, provaController.criarProva);
router.post('/buscarProva', provaController.buscarProvas);
module.exports = router