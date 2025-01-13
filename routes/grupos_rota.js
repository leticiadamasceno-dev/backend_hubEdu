const grupoController = require('../controllers/grupos_controller');
const router = require('express').Router();
const verificarToken = require('../helpers/verificar_token');
const upload = require('../middleare/upload_imagens_middleare');


router.get('/buscarGrupos', verificarToken, grupoController.listarTodosGrupos);
router.post('/criarGrupos',upload.single('foto'),  verificarToken, grupoController.criarGrupos);
router.post('/participarGrupo', verificarToken, grupoController.vincularUsuarioGrupo);
module.exports = router