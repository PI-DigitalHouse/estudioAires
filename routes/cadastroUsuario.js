const express = require('express');
const router = express.Router();
const { cadastroModal, postUsuario, errorMessage } = require('../controllers/cadastroUsuarioController')
const { body } = require('express-validator');

router.get('/', cadastroModal);

router.post('/novo', postUsuario);



module.exports = router;