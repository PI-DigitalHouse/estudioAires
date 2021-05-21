const express = require('express');
const router = express.Router();
const fs = require('fs')
const cadastroMembroController = require('../controllers/cadastroMembroController')
//const bcrypt =require('bcrypt')
dadosSalvos= []


router.get('/membro', cadastroMembroController.cadastroMembro)

router.post('/membro', cadastroMembroController.enviaInfos)  



module.exports = router;