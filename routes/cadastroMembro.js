const express = require('express');
const router = express.Router();
const fs = require('fs')
const cadastroMembroController = require('../controllers/cadastroMembroController')
//const bcrypt =require('bcrypt')
dadosSalvos= []


router.get('/membro', cadastroMembroController.cadastroMembro)

router.post('/membro', cadastroMembroController.enviaInfos)  

function salvarObjeto(objeto){
  const str = JSON.stringify(objeto) // aqui estou transformando o objeto que captei do formulário em string
  fs.writeFileSync('novosMembros.json', str) //aqui indico ONDE e O QUE salvar. 
}

module.exports = router;