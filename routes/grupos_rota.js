const grupoController = require('../controllers/grupos_controller');
const router = require('express').Router();
const verificarToken = require('../helpers/verificar_token');

router.get('/buscarGrupos', verificarToken, grupoController.listarTodosGrupos);
router.post('/criarGrupos', verificarToken, grupoController.criarGrupos);

module.exports = router