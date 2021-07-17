const express = require('express');
const router = express.Router();
const fs = require('fs')
const bcrypt =require('bcrypt') ;

const membrosCadastrados=[];
const {renderizaCadastroMembro, cadastrarMembro} = require('../controllers/cadastroMembroController')

router.get('/', renderizaCadastroMembro)

router.post('/novo', cadastrarMembro);




module.exports = router;