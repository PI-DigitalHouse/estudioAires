const express = require('express');
const router = express.Router();
const fs = require('fs')
//const bcrypt =require('bcrypt')
dadosSalvos= []

router.get('/', function(req, res, next) {
    res.render('cadastro', { title: 'Cadastro' });
  });

router.post('/', function(req, res, next) {
    const dadosDoFormulario = req.body
    dadosSalvos.push(dadosDoFormulario)
    res.send(201);
    console.log(dadosSalvos)
    salvarObjeto(dadosSalvos)
    res.redirect('/')
  });

  function salvarObjeto(objeto){
    const str = JSON.stringify(objeto) // aqui estou transformando o objeto que captei do formulário em string
    fs.writeFileSync('novosUsuarios.json', str) //aqui indico ONDE e O QUE salvar. 
  }

  module.exports = router;