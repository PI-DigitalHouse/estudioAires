const express = require('express');
const router = express.Router();
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const{} = require('../controllers/cadastroController')

const usuariosCadastrados=[];

/* GET cadastroUsuario */
 //localhost:3000/cadastro-usuario
router.get('/', cadastroModal);

router.post('/novo', postUsuario) 
   

module.exports = router;



