const express = require('express');
const router = express.Router();
const{cadastroModal,postUsuario, errorMessage} = require('../controllers/cadastroUsuarioController')
const { getHome, recuSenha, getLogin, autenticacao } = require('../controllers/homeController');



router.get('/', cadastroModal);

router.post('/novo', postUsuario) 



module.exports = router;

