const router = require('express').Router();

const UsuarioController = require('../controllers/usuarios_controller');

router.post('/registrar', UsuarioController.registrar);
router.post('/login', UsuarioController.login);

module.exports = router