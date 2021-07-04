const express = require('express');
const router = express.Router();
const{cadastroModal,postUsuario, errorMessage} = require('../controllers/cadastroUsuarioController')


router.get('/', cadastroModal);

router.post('/novo', postUsuario) 
   

module.exports = router;



