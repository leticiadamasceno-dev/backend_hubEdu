const router = require('express').Router();

const UsuarioController = require('../controllers/usuarios_controller');

router.post('/registrar', UsuarioController.registrar);

module.exports = router