const grupoController = require('../controllers/grupos_controller');
const router = require('express').Router();

router.get('/buscarGrupos', grupoController.listarTodosGrupos);

module.exports = router