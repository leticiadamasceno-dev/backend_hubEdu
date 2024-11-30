const express = require('express');
const RespostasController = require('../controllers/respostas_controller');
const upload = require('../middleare/upload_imagens_middleare'); 

const router = express.Router();

router.post('/', upload.single('foto'), RespostasController.criarResposta);

router.get('/pergunta/:idPergunta', RespostasController.buscarRespostasPorPergunta);

router.get('/usuario/:idUsuario', RespostasController.buscarRespostasPorUsuario);

router.post('/curtirResposta/', RespostasController.curtirReposta);

module.exports = router;
